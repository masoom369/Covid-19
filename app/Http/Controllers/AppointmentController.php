<?php

namespace App\Http\Controllers;

use App\Models\Vaccine;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    
    public function fetch()
{
    $user_id = Auth::id(); // Retrieve the authenticated user's id
    // Retrieve appointments based on patient_id
    $appointments = Appointment::where('user_id', $user_id)->get();

    return view('patient.report', compact('appointments'));
}


    public function reportList()
    {
        $hospitalname = Auth::user()->name;
        $appointments = Appointment::where('hospitalname', $hospitalname)
            ->where('status', 'approved')
            ->get();
        return view('hospital.report-list', compact('appointments'));
    }

    public function update(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);
        $request->validate([
            'result' => 'required|in:positive,negative,pending',
            'vaccination' => 'required|in:done,not done',
        ]);
        $appointment->result = $request->result;
        $appointment->vaccination = $request->vaccination;
        $appointment->save();
        return redirect('hospital/report-list')->with('success', 'Appointment  updated successfully.');
    }

    public function edit($id)
    {
        $appointment = Appointment::findOrFail($id);
        return view('hospital.update-appointment', compact('appointment'));
    }

    public function create()
    {
        $user = Auth::user(); // Get the authenticated user
        $patients = User::where('role', 0)->get('name'); // Fetch all patients (assuming role 0 is for patients)
        $hospitals = User::where('role', 2)->get(); // Fetch hospitals (assuming role 2 is for hospitals)
        $vaccines = Vaccine::select('vaccine_name')->get();
    
        if ($patients->isEmpty()) {
            return redirect('login');
        }
    
        return view('patient.appointment', compact('hospitals', 'user', 'vaccines'));
    }
        public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'hospitalname' => 'required|string|max:255',
            'appointment_type' => 'required|in:covid19-test,vaccination,vaccination and covid19-test',
            'vaccinename' => 'required|string|max:255',
            'datetime' => 'required|date',
            'gender' => 'required|in:Male,Female,Other',
            'nic' => ['required', 'string', 'regex:/^\d{5}-\d{7}-\d$/'],
        ]);
        $userId = auth()->id();

        Appointment::create([
            'user_id' => $userId,
            'username' => $request->username,
            'hospitalname' => $request->hospitalname,
            'appointment_type' => $request->appointment_type,
            'vaccinename' => $request->vaccinename,
            'datetime' => $request->datetime,
            'gender' => $request->gender,
            'nic' => $request->nic,
            'status' => 'pending', // Default status
            'vaccination' => 'not done', // Default
            'result' => 'pending', // Default
        ]);
        return redirect('patient/report')->with('success', 'Appointment created successfully.');
    }

    public function appointmentlist()
    {
        $appointments = Appointment::orderBy('created_at', 'desc')->get();
        return view('admin.appointment-list', compact('appointments'));
    }

    public function approveForm($id)
    {
        $appointment = Appointment::findOrFail($id);
        return view('admin.approve-appointment', compact('appointment'));
    }

    public function approve(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->status = $request->status;
        $appointment->save();
        return redirect('admin/appointment-list')->with('success', 'Appointment status updated successfully.');
    }
}
