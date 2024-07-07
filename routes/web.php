<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ExcelController;
use App\Http\Controllers\VaccineController;
use App\Http\Controllers\AppointmentController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

//website route
Route::get('/', function () {
    return view('index');
});
Route::get('/corona', function () {
    return view('corona');
});
Route::get('/symptoms', function () {
    return view('symptoms');
});
Route::get('/prevention', function () {
    return view('prevention');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// dashboard routes
Route::get('/home', [HomeController::class, 'home']);

// excel routes
Route::get('/download/today', [ExcelController::class, 'downloadToday'])->name('download.today');
Route::get('/download/this_week', [ExcelController::class, 'downloadThisWeek'])->name('download.this_week');
Route::get('/download/this_month', [ExcelController::class, 'downloadThisMonth'])->name('download.this_month');
Route::get('/download/all', [ExcelController::class, 'downloadAll'])->name('download.all');

// vaccines
Route::get('admin/add-vaccine', function () {
    return view('admin/add-vaccine'); })->middleware('admin');
Route::post('admin/add-vaccine', [VaccineController::class, 'input'])->middleware('admin');
Route::get('admin/vaccine-list', [VaccineController::class, 'fetch'])->middleware('admin');
Route::get('admin/update-vaccine/{id}', [VaccineController::class, 'edit'])->middleware('admin');
Route::post('admin/update-vaccine/{id}', [VaccineController::class, 'update'])->middleware('admin');
Route::delete('admin/delete-vaccine/{id}', [VaccineController::class, 'destroy'])->middleware('admin');

// user
Route::get('admin/user-update/{id}', [UserController::class, 'edit'])->middleware('admin');
Route::put('admin/user-update/{id}', [UserController::class, 'approve'])->middleware('admin');

// admin lists
Route::get('admin/hospital-list', [UserController::class, 'hospitalList'])->middleware('admin');
Route::get('admin/patient-list', [UserController::class, 'patientList'])->middleware('admin');
Route::get('admin/appointment-list', [AppointmentController::class, 'appointmentlist'])->middleware('admin');

// appointment approval routes
Route::get('admin/approve-appointment/{id}', [AppointmentController::class, 'approveForm'])->middleware('admin');
Route::post('admin/approve-appointment/{id}', [AppointmentController::class, 'approve'])->middleware('admin');

// book appointment and report by patient
Route::get('patient/appointment', [AppointmentController::class, 'create'])->middleware('user');
Route::post('patient/appointment', [AppointmentController::class, 'store'])->middleware('user');
Route::get('patient/report', [AppointmentController::class, 'fetch'])->middleware('user');

// hospital route
Route::get('hospital/report-list', [AppointmentController::class, 'reportList'])->middleware('hospital');
Route::get('hospital/update-appointment/{id}', [AppointmentController::class, 'edit'])->middleware('hospital');
Route::post('hospital/update-appointment/{id}', [AppointmentController::class, 'update'])->middleware('hospital');
Route::get('hospital/vaccine-list', [VaccineController::class, 'fetch'])->middleware('hospital');
Route::get('hospital/update-vaccine/{id}', [VaccineController::class, 'edit'])->middleware('hospital');
Route::post('hospital/update-vaccine/{id}', [VaccineController::class, 'update'])->middleware('hospital');
