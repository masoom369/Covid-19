@extends('layouts.hospital')
@Section('content')
<div class=" md:grid md:grid-cols-3 md:gap-6">
    <div class="md:mt-0 md:col-span-2">
        <div
            class="px-4 py-5 bg-white sm:p-6 shadow {{ isset($actions) ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md' }}">
            <div class="grid grid-cols-6 gap-6">
                <h4 class="mb-2">Update Appointment</h4>
                <form action="{{ url('hospital/update-appointment', $appointment->id) }}" method="POST">
                    @csrf

                    <!-- Result Field -->
                    <div class="mb-2">
                        <label for="result" class="form-label">Result:</label>
                        <select name="result" id="result" class="form-select">
                            <option value="positive" {{ $appointment->result === 'positive' ? 'selected' : '' }}>Positive
                            </option>
                            <option value="negative" {{ $appointment->result === 'negative' ? 'selected' : '' }}>Negative
                            </option>
                        </select>
                    </div>

                    <!-- Vaccination Field -->
                    <div class="mb-3">
                        <label for="vaccination" class="form-label">Vaccination:</label>
                        <select name="vaccination" id="vaccination" class="form-select">
                            <option value="done" {{ $appointment->vaccination === 'done' ? 'selected' : '' }}>Done
                            </option>
                            <option value="not done" {{ $appointment->vaccination === 'not done' ? 'selected' : '' }}>Not
                                Done
                            </option>
                        </select>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-primary">Update Appointment</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection