<x-form-section submit="updatePassword">
        <x-slot name="form">
        <h6 class="mb-4">{{ __('Update Password') }}</h6>
        <label class="form-label">{{ __('Ensure your account is using a long, random password to stay secure.') }}</label>
            <div class="col-span-6 sm:col-span-4 mb-3">
                <x-label for="current_password" value="{{ __('Current Password') }}" class="form-label" />
                <x-input id="current_password" type="password" class="form-control mt-1 block w-full" wire:model="state.current_password" autocomplete="current-password" />
                <x-input-error for="current_password" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4 mb-3">
                <x-label for="password" value="{{ __('New Password') }}" class="form-label" />
                <x-input id="password" type="password" class="form-control mt-1 block w-full" wire:model="state.password" autocomplete="new-password" />
                <x-input-error for="password" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4 mb-3">
                <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" class="form-label" />
                <x-input id="password_confirmation" type="password" class="form-control mt-1 block w-full" wire:model="state.password_confirmation" autocomplete="new-password" />
                <x-input-error for="password_confirmation" class="mt-2" />
            </div>
            <div class="d-flex align-items-center">
                <x-action-message class="me-3" on="saved">
                    {{ __('Saved.') }}
                </x-action-message>

                <x-button>
                    {{ __('Save') }}
                </x-button>
            </div>
        </x-slot>
    </x-form-section>