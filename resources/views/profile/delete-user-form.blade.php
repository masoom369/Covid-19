<x-action-section>
    <x-slot name="content">
        <div class="max-w-xl text-sm text-gray-600 mb-3">
            <h6 class="mb-4">{{ __('Delete Account') }}</h6>
            <label class="form-label">{{ __('Permanently delete your account.') }}</label>
            {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.') }}
        </div>

        <div class="mt-3">
            <button class="btn btn-danger" wire:click="confirmUserDeletion" wire:loading.attr="disabled">
                {{ __('Delete Account') }}
            </button>
        </div>

        <!-- Delete User Confirmation Modal -->
        <x-dialog-modal wire:model.live="confirmingUserDeletion">
            <x-slot name="title">
                <h6 class="modal-title">{{ __('Delete Account') }}</h6>
            </x-slot>

            <x-slot name="content">
                <div class="modal-body">
                    {{ __('Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.') }}

                    <div class="mt-4" x-data="{}"
                        x-on:confirming-delete-user.window="setTimeout(() => $refs.password.focus(), 250)">
                        <input type="password" class="form-control mt-1 block w-3/4" autocomplete="current-password"
                            placeholder="{{ __('Password') }}" x-ref="password" wire:model="password"
                            wire:keydown.enter="deleteUser" />

                        <x-input-error for="password" class="mt-2" />
                    </div>
                </div>
            </x-slot>

            <x-slot name="footer">
                <button class="btn btn-secondary" wire:click="$toggle('confirmingUserDeletion')"
                    wire:loading.attr="disabled">
                    {{ __('Cancel') }}
                </button>

                <button class="btn btn-danger ms-3" wire:click="deleteUser" wire:loading.attr="disabled">
                    {{ __('Delete Account') }}
                </button>
            </x-slot>
        </x-dialog-modal>
    </x-slot>
</x-action-section>