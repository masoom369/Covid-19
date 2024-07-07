@extends('layouts.admin')
@Section('content')
<div class="container">
    <div class="row bg-light mt-5 py-4">
        <div class="col-12 mb-3 mt-1 text-center">
            <h3>Report of Covid-19 in Excel Format</h3>
        </div>
        <div class="col-md-6 d-flex flex-column align-items-center text-center">
            <p class="mb-2">Get the latest Covid-19 report.</p>
            <form action="{{ route('download.today') }}" method="GET">
                <button type="submit" class="btn btn-primary">Download Today's Report</button>
            </form>
            <p class=" mb-2 mt-3">Summary of the week's data.</p>
            <form action="{{ route('download.this_week') }}" method="GET">
                <button type="submit" class="btn btn-primary mb-3">Download This Week's Report</button>
            </form>
        </div>
        <div class="col-md-6 d-flex flex-column align-items-center text-center">
            <p class="mb-2 ">Monthly overview of Covid-19 statistics.</p>
            <form action="{{ route('download.this_month') }}" method="GET">
                <button type="submit" class="btn btn-primary ">Download This Month's Report</button>
            </form>
            <p class="mb-2 mt-3">Comprehensive report of all appointments.</p>
            <form action="{{ route('download.all') }}" method="GET">
                <button type="submit" class="btn btn-primary mb-3">Download All Appointments</button>
            </form>
        </div>
    </div>
</div>

<div class="bg-light mt-5 mb-5" style="padding: 20px;">
    <center>
        <h4>User List</h4>
    </center>
    @if(session('success'))
    <div class="alert alert-success alert-dismissible fade show mt-3 mb-3" role="alert">
        {{ session('success') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
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
                     <th>Role</th>
                    <th>User Type</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @forelse($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->phone }}</td>
                        <td>{{ $user->address }}</td>
                        <td>{{ $user->dob }}</td>
                        <td>{{ $user->role }}</td>
                        <td>{{ $user->user_type }}</td>
                        <td>{{ $user->is_approved }}</td>
                        <td>
                            <a href="{{ url('admin/user-update', $user->id) }}" class="btn btn-primary">Edit</a>

                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="3">No User Found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection