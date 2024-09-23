@extends('layouts.admin')

@section('content')
<div class="md:grid md:grid-cols-3 md:gap-6 mt-5 mb-5">
    <div class="md:mt-0 md:col-span-2">
        <div class="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-md">
            <h4 class="mb-2">Edit User</h4>
            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif

            <form method="POST" action="{{ url('admin/user-update', $user->id) }}">
                @csrf
                @method('PUT') <!-- Use PUT method for update -->

                <div class="mb-2">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{ $user->name }}" readonly>
                </div>

                <div class="mb-2">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" value="{{ $user->email }}"
                        readonly>
                </div>

                <div class="mb-2">
                    <label for="phone" class="form-label">Phone:</label>
                    <input type="text" id="phone" name="phone" class="form-control" value="{{ $user->phone }}" readonly>
                </div>

                <div class="mb-2">
                    <label for="address" class="form-label">Address:</label>
                    <input type="text" id="address" name="address" class="form-control" value="{{ $user->address }}"
                        readonly>
                </div>

                <div class="mb-2">
                    <label for="dob" class="form-label">Date of Birth:</label>
                    <input type="text" id="dob" name="dob" class="form-control" value="{{ $user->dob }}" readonly>
                </div>

                <div class="mb-2">
                    <label for="user_type" class="form-label">User Type:</label>
                    <select id="user_type" name="user_type" class="form-select" disabled>
                        <option value="hospital" @if($user->user_type == 'hospital') selected @endif>Hospital</option>
                        <option value="patient" @if($user->user_type == 'patient') selected @endif>Patient</option>
                    </select>
                </div>

                <div class="mb-2">
                    <label for="is_approved" class="form-label">Is Approved:</label>
                    <input type="text" id="is_approved" name="is_approved" class="form-control"
                        value="{{ $user->is_approved }}">
                </div>

                <div class="mb-3">
                    <label for="role" class="form-label">Role:</label>
                    <input type="text" id="role" name="role" class="form-control" value="{{ $user->role }}">
                </div>

                <button type="submit" class="btn btn-primary mb-2">Update</button>
            </form>
        </div>
    </div>
</div>
@endsection