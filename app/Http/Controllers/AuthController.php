<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        $banner = null;
        if (Auth::guard('web')->attempt($data))
        {
            /** @var \App\Models\User */
            $user = Auth::guard('web')->user();
            $scopes = $user->getScopes();
            
            $request->session()->regenerate();
            return response()->json(['message' => 'Successfully Logged In.', 'scopes' => $scopes,'banner' => $banner,'mtype' => 'success'], 200);
        }

        return response()->json(['message' => 'Invalid Credentials', 'mtype' => 'error'], 400);
    }

    public function user(Request $request)
    {
        /** @var \App\Models\User */
        $user = auth('web')->user();
        $scopes = $user->getRoleNames();
        $user_role = $scopes; 
        $user['type'] = $user_role;
        return response()->json(['user' => $user, 'scopes' => $scopes], 200);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout Complete', 'mtype' => 'success'], 200);
    }
}
