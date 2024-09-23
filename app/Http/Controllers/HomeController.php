<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vaccine;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home()
    {
        if (auth()->check()) {
            $role = auth()->user()->role;

            if ($role == '1') {
                $users = User::all();
                return view('admin.dashboard', compact('users'));
            } elseif ($role == '2') {
                $patients = User::where('role', '0')->get();
                return view('hospital.dashboard', compact('patients'));
            } elseif ($role == '0') {
                $hospitals = User::where('role', '2')->get();
                $vaccines = Vaccine::all();
                return view('patient.dashboard', compact('vaccines','hospitals'));
            }
        }
        return view('auth.login');
    }
}
