@php
    $role = auth()->user()->role;
    $layouts = [
        0 => 'layouts.patient',
        1 => 'layouts.admin',
        2 => 'layouts.hospital',
    ];
    $layout = $layouts[$role] ?? null;
@endphp

@if ($layout)
    @extends($layout)
    
    @section('content')
    <div class=" mt-3">
        <center>
            <h2>Profile Settings</h2>
        </center>
    </div>

    @if (Laravel\Fortify\Features::canUpdateProfileInformation())
        <div class="mb-3 sm:mt-0">
            @livewire('profile.update-profile-information-form')
        </div>
    @endif

    @if (Laravel\Fortify\Features::enabled(Laravel\Fortify\Features::updatePasswords()))
        <div class="sm:mt-0">
            @livewire('profile.update-password-form')
        </div>
    @endif

    @if (Laravel\Fortify\Features::canManageTwoFactorAuthentication())
        <div class="mt-3 sm:mt-0">
            @livewire('profile.two-factor-authentication-form')
        </div>
    @endif

    <div class="mt-3 sm:mt-0">
        @livewire('profile.logout-other-browser-sessions-form')
    </div>

    @if (Laravel\Jetstream\Jetstream::hasAccountDeletionFeatures())
        <div class="mt-3 mb-4 sm:mt-0">
            @livewire('profile.delete-user-form')
        </div>
    @endif

    @endsection
@else
    <p>Unauthorized access or role not defined.</p>
@endif
