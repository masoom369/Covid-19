@extends('layouts.admin')
@Section('content')
<div class=" md:grid md:grid-cols-3 md:gap-6">
    <div class="md:mt-0 md:col-span-2">
        <div
            class="px-4 py-5 bg-white sm:p-6 shadow {{ isset($actions) ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md' }}">
            <div class="grid grid-cols-6 gap-6">
                <h4>Approve Appointment</h4>
                <form action="{{ url('admin/approve-appointment', $appointment->id) }}" method="POST">
                    @csrf
                    <div class="mb-2">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select mb-3" id="status" name="status" required>
                            <option value="approved" {{ $appointment->status === 'approved' ? 'selected' : '' }}>Approve
                            </option>
                            <option value="rejected" {{ $appointment->status === 'rejected' ? 'selected' : '' }}>Reject
                            </option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection