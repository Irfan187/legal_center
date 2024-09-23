<?php

namespace App\Http\Controllers;

use App\Helpers\Functions;
use App\Models\Designation;
use Exception;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class DesignationsController extends Controller
{
    public function fetchDesignations(Request $request){
        try
        {
            $queryParams = Functions::get_query_params($request);
            $selectCols = ['designations.id', 'designations.name', 'designations.created_at'];
            $selectRaw = "";
            $searchCols = [['designations.name', 'string']];

            $query = Designation::query();

            $query = Functions::query_generator($query, $queryParams, $selectCols, $selectRaw, $searchCols);
            
            $designations = $query->paginate($queryParams['limit']);

            return response()->json(['tableData' => $designations]);
        }
        catch (Exception $e)
        {
            logger($e->getMessage() . ' - ' . $e->getCode() . ' - ' . $e->getLine() . ' - ' . $e->getTraceAsString());
            return response()->json(['message' => 'Error Raised while fetching designations', 'mtype' => 'error'], 500);
        }
    }
}
