@extends('layouts.hospital')
@Section('content')
<div class="bg-light mt-5 mb-5"style="padding: 20px;">
        <center>
<h4>Report List</h4></center>
@if(session('success'))
    <div class="alert alert-success alert-dismissible fade show mt-3 mb-3" role="alert">
        {{ session('success') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
<div class="table-responsive ">
    <table class="table" id="mytable">
        <thead>
            <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>NIC</th>
                <th>Hospital</th>
                <th>Appointment Type</th>
                <th>Date Time</th>
                <th>Status</th>
                <th>Result</th>
                <th>Vaccination</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        @forelse($appointments as $appointment)
                <tr>
                    <td>{{ $appointment->username }}</td>
                    <td>{{ $appointment->gender }}</td>
                    <td>{{ $appointment->nic }}</td>
                    <td>{{ $appointment->hospitalname }}</td>
                    <td>{{ $appointment->appointment_type }}</td>
                    <td>{{ $appointment->datetime }}</td>
                    <td>{{ $appointment->status }}</td>
                    <td>{{ $appointment->result }}</td>
                    <td>{{ $appointment->vaccination }}</td>
                    <td>
                        <a href="{{ url('hospital/update-appointment', $appointment->id) }}"
                            class="btn btn-primary">Update</a>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="3">No Appointment Found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
</div>
@endsection