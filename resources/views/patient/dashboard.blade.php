@extends('layouts.patient')
@Section('content')
<div class="bg-light  mt-5 mb-5"style="padding: 20px;">
        <center>
<h4>Vaccine List</h4></center>
<div class="table-responsive">
    <table class="table" id="mytable">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
            </tr>
        </thead>
        <tbody>
            @forelse($vaccines as $vaccine)
                <tr>
                    <td>{{ $vaccine->vaccine_name }}</td>
                    <td>{{ $vaccine->vaccine_availability }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="3">No Vaccines Found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
</div>
<div class="bg-light mt-5 mb-5"style="padding: 20px;">
        <center>
<h4>Hospital List</h4></center>
<div class="table-responsive">
    <table class="table" id="mytable1">
        <thead>
            <tr>
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