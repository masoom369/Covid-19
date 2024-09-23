@extends('layouts.hospital')
@Section('content')
<div class="bg-light mt-5 mb-5"style="padding: 20px;">
        <center>
<h4>Patient List</h4></center>
<div class="table-responsive">
    <table class="table" id="mytable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <!-- Add more columns as needed -->
            </tr>
        </thead>
        <tbody>
            @forelse($patients as $patient)
                <tr>
                    <td>{{ $patient->id }}</td>
                    <td>{{ $patient->name }}</td>
                    <td>{{ $patient->email }}</td>
                    <td>{{ $patient->phone }}</td>
                    <td>{{ $patient->address }}</td>
                    <td>{{ $patient->dob }}</td>
                    <!-- Add more columns as needed -->
                </tr>
            @empty
                <tr>
                    <td colspan="3">No Patients Found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
</div>
@endsection