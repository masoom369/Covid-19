@extends('layouts.admin')
@Section('content')
<div class=" md:grid md:grid-cols-3 md:gap-6">
    <div class="md:mt-0 md:col-span-2">
        <div
            class="px-4 py-5 bg-white sm:p-6 shadow {{ isset($actions) ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md' }}">
            <div class="grid grid-cols-6 gap-6">
                <h4 class="mb-2">Add Vaccine</h4>
                <form action="{{ url('admin/add-vaccine') }}" method="POST">
                    @csrf
                    <div class="mb-2">
                        <label for="vaccine_name" class="form-label">Vaccine Name</label>
                        <input type="text" class="form-control" id="vaccine_name" name="vaccine_name" required>
                    </div>
                    <div class="mb-3">
                        <label for="vaccine_availability" class="form-label">Vaccine Availability</label>
                        <input type="text" class="form-control" id="vaccine_availability" name="vaccine_availability"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Vaccine</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection