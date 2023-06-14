<template>
    <div :class="[$options.name, ...classes.root]" @click.self="$emit('close')">
        <div :class="[`${ $options.name }__body`, ...classes.body]">
            <div :class="[`${$options.name}__content`, ...classes.content]">
                <button
                    :class="[`${$options.name}__close_button`, ...classes.closeButton]"
                    v-if="!hideCloseButton"
                    type="button"
                    @click="$emit('close')">
                    <!-- TODO: replace by icon -->
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-5 w-5">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z">
                        </path>
                    </svg>
                </button>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BienIci_Modal',
    emits: ['close'],
    props: {
        hideCloseButton: Boolean,
    },
    data() {
        return {
            classes: {
                root: [
                    'overflow-x-hidden',
                    'overflow-y-auto',
                    'fixed',
                    'inset-0',
                    'z-40',
                    'outline-none',
                    'focus:outline-none',
                    'justify-center',
                    'items-center',
                    'flex',
                    'bg-transparent-black-25',
                ],
                body: [
                    'relative',
                    'w-auto',
                    'my-6',
                    'mx-auto',
                    'max-w-6xl',
                    'min-w-min-mobile',
                ],
                content: [
                    'border-0',
                    'shadow-lg',
                    'relative',
                    'flex',
                    'flex-col',
                    'w-full',
                    'bg-white',
                    'outline-none',
                    'focus:outline-none',
                    'max-w-lg',
                ],
                closeButton: [
                    'flex',
                    'items-center',
                    'justify-center',
                    'absolute',
                    'right-5',
                    'top-5',
                    '-m-3',
                    'h-8',
                    'w-8',
                    'transition',
                    'duration-100',
                ],
            },
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
