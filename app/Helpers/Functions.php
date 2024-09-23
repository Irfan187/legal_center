<?php

namespace App\Helpers;

use App\Models\File;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image as Images;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Container\ContainerExceptionInterface;

class Functions
{

    public static $month_array = [
        '1' => 'Jan',
        '2' => 'Feb',
        '3' => 'Mar',
        '4' => 'Apr',
        '5' => 'May',
        '6' => 'Jun',
        '7' => 'Jul',
        '8' => 'Aug',
        '9' => 'Sep',
        '10' => 'Oct',
        '11' => 'Nov',
        '12' => 'Dec'
    ];

    public static $month_names = ['january', 'jan', 'february', 'feb', 'march', 'mar', 'april', 'apr', 'may', 'june', 'jun', 'july', 'jul', 'august', 'aug', 'september', 'sep', 'october', 'oct', 'november', 'nov', 'december', 'dec'];

    public static function is_empty($var)
    {
        return empty($var) || is_null($var);
    }

    public static function not_empty($var)
    {
        return !Functions::is_empty($var);
    }

    public static function filtered_request_data($data, $same_case = false)
    {
        foreach ($data as $i => $d)
        {
            if ($d === "null" || $d === "")
            {
                $data[$i] = null;
            }
            if ($same_case && !($d === "null" || $d === ""))
            {
                $data[$i] = strtolower($data[$i]);
            }
        }
        return $data;
    }

    public static function file_upload(UploadedFile $image, $path, $size = [])
    {

        if (count($size))
        {
            $width = $size[0];
            $height = $size[0];
            if(isset($size[1])){
                $height = $size[1];
            }
            $img = Images::make($image)->resize($width, $height, function ($constraint)
            {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->encode('webp', 100);
            $img->save($path);
        }
        else
        {
            $img = Images::make($image)->encode('webp', 100);
            $img->save($path);
        }
        Artisan::call('storage:link');
    }

    public static function seconds_to_time($seconds)
    {
        $time = "";

        $hours = floor($seconds / 3600);
        if ($hours > 0)
        {
            $time .= $hours . ' hr ';
            $seconds = $seconds - ($hours * 3600);
        }

        $minutes = floor($seconds / 60);
        if ($minutes > 0)
        {
            $time .= $minutes . ' min ';
            $seconds = $seconds - ($minutes * 60);
        }

        if ($seconds > 0)
        {
            $time .= $seconds . ' sec';
        }

        $time = trim($time);

        return $time;
    }

    public static function get_time_ago($time_stamp)
    {
        $time_difference = strtotime('now') - $time_stamp;

        if ($time_difference >= 60 * 60 * 24 * 365.242199)
        {
            /*
         * 60 seconds/minute * 60 minutes/hour * 24 hours/day * 365.242199 days/year
         * This means that the time difference is 1 year or more
         */
            return Functions::get_time_ago_string($time_stamp, 60 * 60 * 24 * 365.242199, 'year');
        }
        elseif ($time_difference >= 60 * 60 * 24 * 30.4368499)
        {
            /*
         * 60 seconds/minute * 60 minutes/hour * 24 hours/day * 30.4368499 days/month
         * This means that the time difference is 1 month or more
         */
            return Functions::get_time_ago_string($time_stamp, 60 * 60 * 24 * 30.4368499, 'month');
        }
        elseif ($time_difference >= 60 * 60 * 24 * 7)
        {
            /*
         * 60 seconds/minute * 60 minutes/hour * 24 hours/day * 7 days/week
         * This means that the time difference is 1 week or more
         */
            return Functions::get_time_ago_string($time_stamp, 60 * 60 * 24 * 7, 'week');
        }
        elseif ($time_difference >= 60 * 60 * 24)
        {
            /*
         * 60 seconds/minute * 60 minutes/hour * 24 hours/day
         * This means that the time difference is 1 day or more
         */
            return Functions::get_time_ago_string($time_stamp, 60 * 60 * 24, 'day');
        }
        elseif ($time_difference >= 60 * 60)
        {
            /*
         * 60 seconds/minute * 60 minutes/hour
         * This means that the time difference is 1 hour or more
         */
            return Functions::get_time_ago_string($time_stamp, 60 * 60, 'hour');
        }
        elseif ($time_difference >= 60)
        {
            /*
         * 60 seconds/minute
         * This means that the time difference is a matter of minutes
         */
            return Functions::get_time_ago_string($time_stamp, 60, 'minute');
        }
        else
        {
            /*
         * 60 seconds
         * This means that the time difference is a matter of seconds
         */
            return Functions::get_time_ago_string($time_stamp, 1, 'second');
        }
    }

    public static function get_time_ago_string($time_stamp, $divisor, $time_unit)
    {
        $time_difference = strtotime("now") - $time_stamp;
        $time_units      = floor($time_difference / $divisor);

        settype($time_units, 'string');

        if ($time_units === '0')
        {
            return 'less than 1 ' . $time_unit . ' ago';
        }
        elseif ($time_units === '1')
        {
            return '1 ' . $time_unit . ' ago';
        }
        else
        {
            /*
         * More than "1" $time_unit. This is the "plural" message.
         */
            // TODO: This pluralizes the time unit, which is done by adding "s" at the end; this will not work for i18n!
            return $time_units . ' ' . $time_unit . 's ago';
        }
    }

    public static function get_query_params(Request $request)
    {
        // $starts_with = "";
        $filter = "";
        $dir = "asc";
        $limit = 10;
        $sort = "name";
        $page = 1;
        // $search = "no";
        $filternames = [];
        $filtervalues = [];
        $filtercond = [];
        $filterfieldtype = [];
        // $filteraltnames = [];

        // if ($request->filled('startsWith'))
        // {
        //     $starts_with = $request->query('startsWith');
        // }
        if ($request->filled('limit'))
        {
            $limit = $request->query('limit');
        }
        if ($request->filled('page'))
        {
            $page = $request->query('page');
        }
        if ($request->filled('sort'))
        {
            $sort = $request->query('sort');
        }
        if ($request->filled('dir'))
        {
            $dir = $request->query('dir');
        }
        if ($request->filled('filter'))
        {
            $filter = $request->query('filter');
        }
        // if ($request->filled('search'))
        // {
        //     $search = $request->query('search');
        // }
        if ($request->filled('filternames'))
        {
            $filternames = $request->query('filternames');
        }
        if ($request->filled('filtervalues'))
        {
            $filtervalues = $request->query('filtervalues');
        }
        if ($request->filled('filterfieldtype'))
        {
            $filterfieldtype = $request->query('filterfieldtype');
        }
        if ($request->filled('filtercond'))
        {
            $filtercond = $request->query('filtercond');
        }
        // if ($request->filled('filteraltnames'))
        // {
        //     $filteraltnames = $request->query('filteraltnames');
        // }

        return compact('page', 'filter', 'dir', 'limit', 'sort', 'filternames', 'filtervalues', 'filterfieldtype', 'filtercond');
    }

    public static function query_generator(Builder $query, $params, $selectCols, $selectRaw = '', $searchCols = [])
    {
        $query = $query->select($selectCols);
        if($selectRaw != ''){
            $query = $query->selectRaw($selectRaw);
        }
        $query = Functions::apply_query_filters($query, $params, $searchCols);
        $query->orderBy($params['sort'], $params['dir']);
        return $query;
    }

    public static function apply_query_filters(Builder $query, $params, $searchCols)
    {
        if (isset($params['filter']))
        {
            $query = $query->where(function ($q) use ($query, $searchCols, $params)
            {
                foreach ($searchCols as $index => $searchCol)
                {
                    if ($searchCol[1] == 'datetime')
                    {
                        try
                        {
                            $search_value = $params['filter'];
                            $temp_val = $params['filter'];
                            if (is_numeric($temp_val))
                            {
                                $temp_val = (int) $temp_val;
                            }
                            $date = Carbon::parse($temp_val);
                        }
                        catch (Exception $e)
                        {
                            continue;
                        }
                    }
                    $col = $searchCol[0];

                    if ($index == 0)
                    {
                        if ($searchCol[1] == 'string')
                        {
                            $q = $q->where($searchCol[0], 'like', '%' . $params['filter'] . '%');
                        }
                        else if ($searchCol[1] == 'numeric')
                        {
                            $q = $q->where($searchCol[0], '=', $params['filter']);
                        }
                        else if ($searchCol[1] == 'datetime')
                        {

                            $q = $q->where(function ($qr) use ($col, $date, $temp_val, $search_value)
                            {
                                if (in_array(strtolower($search_value), Functions::$month_names))
                                {
                                    $qr->whereMonth($col, "=", Carbon::parse($temp_val)->month);
                                }
                                elseif (($date->toDateString() == "1970-01-01" && ((int) $temp_val !== 1970 || (string) $temp_val !== "1970-01-01")))
                                {
                                    $qr->whereDate($col, "=", $date->toDateString())->orWhereDay($col, "=", $temp_val)->orWhereMonth($col, "=", Carbon::parse($temp_val)->month)->orWhereYear($col, "=", $date->year == 1970 && (int) $temp_val !== 1970 ? $temp_val : $date->year);
                                }
                                else
                                {
                                    $qr->whereDate($col, "=", $date->toDateString())->whereDay($col, "=", $date->day)->whereMonth($col, "=", $date->month)->whereYear($col, "=", $date->year == 1970 && (int) $temp_val !== 1970 ? $temp_val : $date->year);
                                }
                            });
                            if (!($date->toDateString() == "1970-01-01" && ((int) $temp_val !== 1970 || (string) $temp_val !== "1970-01-01")))
                            {
                                $q = $q->orWhereRaw('WEEKDAY(' . $col . ') = ' . ($date->dayOfWeek - 1));
                            }
                        }
                    }
                    else
                    {
                        if ($searchCol[1] == 'string')
                        {
                            $q = $q->orWhere($searchCol[0], 'like', '%' . $params['filter'] . '%');
                        }
                        else if ($searchCol[1] == 'numeric')
                        {
                            $q = $q->orWhere($searchCol[0], '=', $params['filter']);
                        }
                        else if ($searchCol[1] == 'datetime')
                        {
                            $q = $q->orWhere(function ($qr) use ($col, $date, $temp_val, $search_value)
                            {
                                if (in_array(strtolower($search_value), Functions::$month_names))
                                {
                                    $qr->whereMonth($col, "=", Carbon::parse($temp_val)->month);
                                }
                                elseif (($date->toDateString() == "1970-01-01" && ((int) $temp_val !== 1970 || (string) $temp_val !== "1970-01-01")))
                                {
                                    $qr->whereDate($col, "=", $date->toDateString())->orWhereDay($col, "=", $temp_val)->orWhereMonth($col, "=", Carbon::parse($temp_val)->month)->orWhereYear($col, "=", $date->year == 1970 && (int) $temp_val !== 1970 ? $temp_val : $date->year);
                                }
                                else
                                {
                                    $qr->whereDate($col, "=", $date->toDateString())->whereDay($col, "=", $date->day)->whereMonth($col, "=", $date->month)->whereYear($col, "=", $date->year == 1970 && (int) $temp_val !== 1970 ? $temp_val : $date->year);
                                }
                            });
                            if (!($date->toDateString() == "1970-01-01" && ((int) $temp_val !== 1970 || (string) $temp_val !== "1970-01-01")))
                            {
                                $q = $q->orWhereRaw('WEEKDAY(' . $col . ') = ' . ($date->dayOfWeek - 1));
                            }
                        }
                    }
                }
            });
        }

        if (isset($params['filternames']))
        {
            foreach ($params['filternames'] as $filter_index => $filter)
            {
                $first = true;
                if (strpos($filter, 'having_') !== false)
                {
                    continue;
                }

                if ($params['filtercond'] == 'and')
                {
                    $query = $query->where(function ($q1) use ($filter, $params, $filter_index)
                    {
                        foreach ($params['filtervalues'][$filter_index] as $filter_value_index => $filter_value)
                        {
                            $filter_params = explode('|', $filter_value);
                            if (count($filter_params) > 1)
                            {
                                $temp_col_name = $filter_params[0] . '.' . $filter_params[1];
                                $filter_values = explode(',', $filter_params[2]);
                            }
                            else
                            {
                                $temp_col_name = '';
                                $filter_values = explode(',', $filter_params[0]);
                            }

                            if ($params['filterfieldtype'][$filter_index] == 'string')
                            {
                                $q1->where(function ($q2) use ($filter, $filter_values, $temp_col_name)
                                {
                                    foreach ($filter_values as $ifv => $fv)
                                    {
                                        if ($temp_col_name == '')
                                        {
                                            if($fv == ''){
                                                $q2->whereNull($filter);
                                            }
                                            else{
                                                $q2->where($filter, 'like', '%' . $fv . '%');
                                            }
                                            
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q2->whereNull($temp_col_name);
                                            }
                                            else{
                                                $q2->where($temp_col_name, 'like', '%' . $fv . '%');
                                            }
                                        }
                                    }
                                });
                            }
                            else if ($params['filterfieldtype'][$filter_index] == 'numeric')
                            {
                                $q1->where(function ($q2) use ($filter, $filter_values, $temp_col_name)
                                {
                                    $temp_col_name = '';
                                    foreach ($filter_values as $ifv => $fv)
                                    {
                                        if ($temp_col_name == '')
                                        {
                                            if($fv == ''){
                                                $q2->whereNull($filter);
                                            }
                                            else{
                                                $q2->where($filter, '=', $fv);
                                            }
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q2->whereNull($temp_col_name);
                                            }
                                            else{
                                                $q2->where($temp_col_name, '=', $fv);
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
                else
                {
                    $query = $query->where(function ($q1) use ($filter, $params, $filter_index, $first)
                    {
                        foreach ($params['filtervalues'][$filter_index] as $filter_value_index => $filter_value)
                        {
                            $filter_params = explode('|', $filter_value);
                            if (count($filter_params) > 1)
                            {
                                $temp_col_name = $filter_params[0] . '.' . $filter_params[1];
                                $filter_values = explode(',', $filter_params[2]);
                            }
                            else
                            {
                                $temp_col_name = '';
                                $filter_values = explode(',', $filter_params[0]);
                            }

                            if ($params['filterfieldtype'][$filter_index] == 'string')
                            {

                                foreach ($filter_values as $ifv => $fv)
                                {
                                    if ($ifv == 0 && $first)
                                    {
                                        if ($temp_col_name != '')
                                        {
                                            if($fv == ''){
                                                $q1->whereNull($temp_col_name);
                                            }
                                            else{
                                                $q1->where($temp_col_name, 'like', '%' . $fv . '%');
                                            }
                                            
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q1->whereNull($filter);
                                            }
                                            else{
                                                $q1->where($filter, 'like', '%' . $fv . '%');
                                            }
                                        }
                                        $first = false;
                                    }
                                    else
                                    {
                                        if ($temp_col_name != '')
                                        {
                                            if($fv == ''){
                                                $q1->orWhereNull($temp_col_name);
                                            }
                                            else{
                                                $q1->orWhere($temp_col_name, 'like', '%' . $fv . '%');
                                            }
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q1->orWhereNull($filter);
                                            }
                                            else{
                                                $q1->orWhere($filter, 'like', '%' . $fv . '%');
                                            }
                                            
                                        }
                                    }
                                }
                            }
                            else if ($params['filterfieldtype'][$filter_index] == 'numeric')
                            {
                                foreach ($filter_values as $ifv => $fv)
                                {
                                    if ($ifv == 0 && $first)
                                    {
                                        if ($temp_col_name != '')
                                        {
                                            if($fv == ''){
                                                $q1->whereNull($temp_col_name);
                                            }
                                            else{
                                                $q1->where($temp_col_name, '=', $fv);
                                            }
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q1->whereNull($filter);
                                            }
                                            else{
                                                $q1->where($filter, '=', $fv);
                                            }
                                        }
                                        $first = false;
                                    }
                                    else
                                    {
                                        if ($temp_col_name != '')
                                        {
                                            if($fv == ''){
                                                $q1->orWhereNull($temp_col_name);
                                            }
                                            else{
                                                $q1->orWhere($temp_col_name, '=', $fv);
                                            }
                                        }
                                        else
                                        {
                                            if($fv == ''){
                                                $q1->orWhereNull($filter);
                                            }
                                            else{
                                                $q1->orWhere($filter, '=', $fv);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }

            foreach ($params['filternames'] as $filter_index => $filter)
            {
                $first = true;
                if (strpos($filter, 'having_') === false)
                {
                    continue;
                }

                $field_name = str_replace("having_", "", $filter);

                if ($params['filtercond'] == 'and')
                {
                    foreach ($params['filtervalues'][$filter_index] as $filter_value_index => $filter_value)
                    {
                        $filter_params = explode('|', $filter_value);
                        if (count($filter_params) > 1)
                        {
                            $temp_col_name = $filter_params[0] . '.' . $filter_params[1];
                            $filter_values = explode(',', $filter_params[2]);
                        }
                        else
                        {
                            $temp_col_name = '';
                            $filter_values = explode(',', $filter_params[0]);
                        }

                        foreach ($filter_values as $ifv => $fv)
                        {
                            if ($params['filterfieldtype'][$filter_index] == 'string')
                            {
                                if ($temp_col_name != '')
                                {
                                    $query = $query->having($temp_col_name, 'like', '%' . $fv . '%');
                                }
                                else
                                {
                                    $query = $query->having($field_name, 'like', '%' . $fv . '%');
                                }
                            }
                            else if ($params['filterfieldtype'][$filter_index] == 'numeric')
                            {
                                if ($temp_col_name != '')
                                {
                                    $query = $query->having($temp_col_name, '=', $fv);
                                }
                                else
                                {
                                    $query = $query->having($field_name, '=', $fv);
                                }
                            }
                        }
                    }
                }
                else
                {
                    foreach ($params['filtervalues'][$filter_index] as $filter_value_index => $filter_value)
                    {
                        $filter_params = explode('|', $filter_value);
                        if (count($filter_params) > 1)
                        {
                            $temp_col_name = $filter_params[0] . '.' . $filter_params[1];
                            $filter_values = explode(',', $filter_params[2]);
                        }
                        else
                        {
                            $temp_col_name = '';
                            $filter_values = explode(',', $filter_params[0]);
                        }

                        foreach ($filter_values as $ifv => $fv)
                        {
                            if ($params['filterfieldtype'][$filter_index] == 'string')
                            {
                                if ($ifv == 0 && $first)
                                {
                                    if ($temp_col_name != '')
                                    {
                                        $query = $query->having($temp_col_name, 'like', '%' . $fv . '%');
                                    }
                                    else
                                    {
                                        $query = $query->having($field_name, 'like', '%' . $fv . '%');
                                    }
                                    $first = false;
                                }
                                else
                                {
                                    if ($temp_col_name != '')
                                    {
                                        $query = $query->orHaving($temp_col_name, 'like', '%' . $fv . '%');
                                    }
                                    else
                                    {
                                        $query = $query->orHaving($field_name, 'like', '%' . $fv . '%');
                                    }
                                }
                            }
                            else if ($params['filterfieldtype'][$filter_index] == 'numeric')
                            {
                                if ($ifv == 0 && $first)
                                {
                                    if ($temp_col_name != '')
                                    {
                                        $query = $query->having($temp_col_name, '=', $fv);
                                    }
                                    else
                                    {
                                        $query = $query->having($field_name, '=', $fv);
                                    }
                                    $first = false;
                                }
                                else
                                {
                                    if ($temp_col_name != '')
                                    {
                                        $query = $query->orHaving($temp_col_name, '=', $fv);
                                    }
                                    else
                                    {
                                        $query = $query->orHaving($field_name, '=', $fv);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // logger($query->toSql());
        // logger($query->getBindings());
        return $query;
    }
}
