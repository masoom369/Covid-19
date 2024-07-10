@extends('layouts.admin')
@Section('content')
<div class="bg-light mt-5 mb-5" style="padding: 20px;">

    <center>
        <h4>Vaccine List</h4>
    </center>
    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show mt-3 mb-3" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif
    @if(session('destroy'))
    <div class="alert alert-destroy alert-dismissible fade show mt-3 mb-3" role="alert">
        {{ session('destroy') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif

    <a href="{{ url('admin/add-vaccine') }}" class="btn btn-primary mb-3">Add Vaccine</a>
    <div class="table-responsive">
        <table class="table" id="mytable">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Availability</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @forelse($vaccines as $vaccine)
                    <tr>
                        <td>{{ $vaccine->id }}</td>
                        <td>{{ $vaccine->vaccine_name }}</td>
                        <td>{{ $vaccine->vaccine_availability }}</td>
                        <td>
                            <a href="{{ url('admin/update-vaccine', $vaccine->id) }}" class="btn btn-primary">Edit</a>
                            <form action="{{ url('admin/delete-vaccine', $vaccine->id) }}" method="POST"
                                style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger"
                                    onclick="return confirm('Are you sure you want to delete this vaccine?');">Delete</button>
                            </form>
                        </td>
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
@endsection