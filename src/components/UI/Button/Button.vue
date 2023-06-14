<template>
    <button :class="[`${$options.name}_Button`, ...classes.button]" type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BienIci_Button',
    data() {
        return {
            classes: {
                button: [
                    'w-full',
                    'text-white',
                    'shadow-md',
                    'hover:shadow-lg',
                    'bg-bienici-yellow',
                    'font-bold',
                    'uppercase',
                    'text-sm',
                    'px-6',
                    'py-3',
                    'outline-none',
                    'focus:outline-none',
                    'mr-1',
                    'mb-1',
                    'ease-linear',
                    'transition-all',
                    'duration-150',
                ],
            },
        }
    },
}
</script>
