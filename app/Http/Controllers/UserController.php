<?php

namespace App\Http\Controllers;

use App\Models\Vaccine;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;

class UserController extends Controller
{
    public function fetch()
    {
        $users = User::all();
        return view('home', compact('users'));
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return view('admin.user-update', compact('user'));
    }

    public function approve(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->user_type = $request->input('user_type');
        $user->is_approved = $request->input('is_approved'); 
        $user->role = $request->input('role');
        $user->save();
    
        return view('home');
    }

    public function hospitalList()
    {
        $hospitals = User::where('role', '2')->get();
        return view('admin.hospital-list', compact('hospitals'));
    }

    public function patientList()
    {
        $patients = User::where('role', '0')->get();
        return view('admin.patient-list', compact('patients'));
    }
}
