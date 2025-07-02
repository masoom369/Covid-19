<x-form-section submit="updateProfileInformation">
    <x-slot name="form">
        <div class="text-sm text-gray-600 mb-3">
            <h6 class="mb-4">{{ __('Profile Information') }}</h6>
            {{ __('Update your account\'s profile information and email address.') }}
        </div>
        <!-- Profile Photo -->
        @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
            <div x-data="{ photoName: null, photoPreview: null }" class="col-span-6 sm:col-span-4">
                <!-- Profile Photo File Input -->
                <input type="file" id="photo" class="hidden" style="display: none;" wire:model.live="photo" x-ref="photo"
                    x-on:change="photoName = $refs.photo.files[0].name; const reader = new FileReader();
                          reader.onload = (e) => { photoPreview = e.target.result; }; reader.readAsDataURL($refs.photo.files[0]);" />
                <x-label for="photo" value="{{ __('Photo') }}" />

                <!-- Current Profile Photo -->
                <div class="mt-2" x-show="! photoPreview">
                    <img src="{{ Auth::user()->profile_photo_url }}" alt="{{ Auth::user()->name }}"
                        class="rounded-full h-20 w-20 object-cover">
                </div>

                <!-- New Profile Photo Preview -->
                <div class="mt-2" x-show="photoPreview" style="display: none;">
                    <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                        x-bind:style="'background-image: url(\'' + photoPreview + '\');'">
                    </span>
                </div>

                <x-secondary-button class="mt-2 me-2" type="button" x-on:click.prevent="$refs.photo.click()">
                    {{ __('Select A New Photo') }}
                </x-secondary-button>

                @if (Auth::user()->profile_photo_path)
                    <x-secondary-button type="button" class="mt-2" wire:click="deleteProfilePhoto">
                        {{ __('Remove Photo') }}
                    </x-secondary-button>
                @endif

                <x-input-error for="photo" class="mt-2" />
            </div>
        @endif
        <!-- Name -->
        <div class="mb-3 mt-3">
            <label for="name" class="form-label">{{ __('Name') }}</label>
            <input id="name" type="text" class="form-control" wire:model="state.name" required autocomplete="name">
            <x-input-error for="name" class="mt-2" />
        </div>

        <!-- Email -->
        <div class="mb-3">
            <label for="email" class="form-label">{{ __('Email') }}</label>
            <input id="email" type="email" class="form-control" wire:model="state.email" required
                autocomplete="username">
            <x-input-error for="email" class="mt-2" />
            @if (Laravel\Fortify\Features::enabled(Laravel\Fortify\Features::emailVerification()) && !Auth::user()->hasVerifiedEmail())
                <p class="form-text mt-2">
                    {{ __('Your email address is unverified.') }}
                    <button type="button" class="btn btn-link p-0" wire:click.prevent="sendEmailVerification">
                        {{ __('Click here to re-send the verification email.') }}
                    </button>
                </p>
                @if (Auth::user()->verificationLinkSent)
                    <p class="mt-2 text-success">
                        {{ __('A new verification link has been sent to your email address.') }}
                    </p>
                @endif
            @endif
        </div>

        <!-- Phone -->
        <div class="mb-3">
            <label for="phone" class="form-label">{{ __('Phone') }}</label>
            <input id="phone" type="text" class="form-control" wire:model="state.phone" required autocomplete="phone">
            <x-input-error for="phone" class="mt-2" />
        </div>

        <!-- Date of Birth -->
        <div class="mb-3">
            <label for="dob" class="form-label">{{ __('Date of Birth') }}</label>
            <input id="dob" type="date" class="form-control" wire:model="state.dob" required autocomplete="dob">
            <x-input-error for="dob" class="mt-2" />
        </div>

        <!-- Address -->
        <div class="mb-3">
            <label for="address" class="form-label">{{ __('Address') }}</label>
            <input id="address" type="text" class="form-control" wire:model="state.address" required
                autocomplete="address">
            <x-input-error for="address" class="mt-2" />
        </div>

        <!-- User Type -->
        <div class="mb-3">
            <label for="user_type" class="form-label">{{ __('User Type') }}</label>
            <select id="user_type" class="form-select" wire:model="state.user_type" required>
                <option value="">{{ __('Select User Type') }}</option>
                <option value="patient">{{ __('Patient') }}</option>
                <option value="hospital">{{ __('Hospital') }}</option>
            </select>
            <x-input-error for="user_type" class="mt-2" />
        </div>

        <div class="mt-3">
            <x-action-message class="me-3" on="saved">
                {{ __('Saved.') }}
            </x-action-message>
            <x-button wire:loading.attr="disabled" wire:target="photo">
                {{ __('Save') }}
            </x-button>
        </div>
    </x-slot>
</x-form-section>