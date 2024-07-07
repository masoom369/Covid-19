@extends('layouts.patient')
@Section('content')
@if(session('success'))
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
        {{ session('success') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
<div class="bg-light mt-5 mb-5">
    <table class="table table-bordered border-dark table-hover text-center">
        <thead>
            <tr>
                <th colspan="2"><h4>Result</h4></th>
            </tr>
        </thead>
        <tbody>
            @forelse ($appointments as $appointment)
                <tr>
                    <td><strong>Username:</strong></td>
                    <td>{{ $appointment->username }}</td>
                </tr>
                <tr>
                    <td><strong>Gender:</strong></td>
                    <td>{{ $appointment->gender }}</td>
                </tr>
                <tr>
                    <td><strong>NIC:</strong></td>
                    <td>{{ $appointment->nic }}</td>
                </tr>
                <tr>
                    <td><strong>Hospital</strong></td>
                    <td>{{ $appointment->hospitalname }}</td>
                </tr>
                <tr>
                    <td><strong>Appointment Type:</strong></td>
                    <td>{{ $appointment->appointment_type }}</td>
                </tr>
                <tr>
                    <td><strong>Date Time:</strong></td>
                    <td>{{ $appointment->datetime }}</td>
                </tr>
                <tr>
                    <td><strong>Status:</strong></td>
                    <td>{{ $appointment->status }}</td>
                </tr>
                <tr>
                    <td><strong>Vaccination:</strong></td>
                    <td>{{ $appointment->vaccination }}</td>
                </tr>
                <tr>
                    <td><strong>Result:</strong></td>
                    <td>{{ $appointment->result }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="2"><h3>No User Found.</h3></td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>

    @endsection