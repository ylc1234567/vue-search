<template>
    <div :class="classes['root']">
        <div :class="classes['title']">
            <h3 class="text-xl font-semibold">
                <slot name="title"></slot>
            </h3>
        </div>

        <div :class="classes['content']">
            <slot name="content"></slot>
        </div>

        <div :class="classes['footer']">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BienIci_ModalLayout',
    data() {
        return {
            classes: {
                root: [
                    `${this.$options.name}`
                ],
                title: [
                    `${this.$options.name}__title`,
                    'flex',
                    'items-start',
                    'justify-between',
                    'p-5',
                    'rounded-t',
                ],
                content: [
                    `${this.$options.name}__content`,
                    'relative',
                    'p-6',
                    'flex-auto',
                ],
                footer: [
                    `${this.$options.name}__footer`,
                    'flex',
                    'items-center',
                    'justify-start',
                    'p-6',
                ],
            },
        }
    },
}
</script>
