<template>
    <div :class="classes['root']">
        <h4 :class="classes['label']">
            <slot name="label"/>
        </h4>

        <div :class="classes['input']">
            <slot name="input"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BienIci_InputLayout',
    data() {
        return {
            classes: {
                root: [
                    `${this.$options.name}`
                ],
                label: [
                    `${this.$options.name}__label`,
                    'uppercase',
                    'text-sm',
                ],
                input: [
                    `${this.$options.name}__input`,
                ],
            },
        }
    },
}
</script>
