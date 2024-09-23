@extends('layouts.admin')
@Section('content')
<div class="bg-light mt-5 mb-5"style="padding: 20px;">
        <center>
<h4>Hospital List</h4></center>
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
            @forelse($hospitals as $hospital)
                <tr>
                    <td>{{ $hospital->id }}</td>
                    <td>{{ $hospital->name }}</td>
                    <td>{{ $hospital->email }}</td>
                    <td>{{ $hospital->phone }}</td>
                    <td>{{ $hospital->address }}</td>
                    <td>{{ $hospital->dob }}</td>
                    <!-- Add more columns as needed -->
                </tr>
            @empty
                <tr>
                    <td colspan="3">No Hospitals Found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
</div>
@endsection