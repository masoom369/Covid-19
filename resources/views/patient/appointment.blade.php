@extends('layouts.patient')
@section('content')
<div class=" md:grid md:grid-cols-3 md:gap-6 mt-5 mb-5">
    <div class="md:mt-0 md:col-span-2">
        <div
            class="px-4 py-5 bg-white sm:p-6 shadow {{ isset($actions) ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md' }}">
            <div class="grid grid-cols-6 gap-6">
                <h4 class="mb-2">Create Appointment</h4>
                
                <form action="{{ url('patient/appointment') }}" method="POST">
                    @csrf

                    <div class="mb-2">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name="username" value="{{ $user->name }}" required>
                    </div>

                    <div class="mb-2">
                        <label for="hospitalname" class="form-label">Hospital Name</label>
                        <select class="form-select" id="hospitalname" name="hospitalname" required>
                            <option value="">Select Hospital</option>
                            @foreach($hospitals as $hospital)
                                <option value="{{ $hospital->name }}">{{ $hospital->name }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="appointment_type" class="form-label">Appointment Type</label>
                        <select class="form-select" id="appointment_type" name="appointment_type" required>
                            <option value="">Select Appointment Type</option>
                            <option value="covid19-test">COVID-19 Test</option>
                            <option value="vaccination">Vaccination</option>
                            <option value="vaccination and covid19-test">Covid-19 Test and Vaccination</option>
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="vaccinename" class="form-label">Vaccine</label>
                        <select class="form-select" id="vaccinename" name="vaccinename" required>
                            <option value="">Select Vaccine</option>
                            <option value="Not taking">Not taking</option>
                            <option value="already taken">already taken</option>
                            @foreach($vaccines as $vaccine)
                                <option value="{{ $vaccine->vaccine_name }}">{{ $vaccine->vaccine_name }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="datetime" class="form-label">Appointment Date and Time</label>
                        <input type="datetime-local" class="form-control" id="datetime" name="datetime"
                            value="{{ old('datetime') }}" required>
                    </div>

                    <div class="mb-2">
                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-select" id="gender" name="gender" required>
                            <option value="">Select Gender</option>
                            <option value="Male" {{ old('gender') === 'Male' ? 'selected' : '' }}>Male</option>
                            <option value="Female" {{ old('gender') === 'Female' ? 'selected' : '' }}>Female</option>
                            <option value="Other" {{ old('gender') === 'Other' ? 'selected' : '' }}>Other</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="nic" class="form-label">NIC (National Identity Card)</label>
                        <input type="text" class="form-control" id="nic" name="nic" value="{{ old('nic') }}" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Create Appointment</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection