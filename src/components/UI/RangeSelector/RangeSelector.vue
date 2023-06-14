<template>
    <div :class="classes['root']">
        <div
            v-for="index in range" :key="index"
            :class="getElementClass(index)"
            @click="onClick(index)">
            {{ $t(index) }}
        </div>
    </div>
</template>

<script>
import translationMixin from '@/mixins/translationMixin.js'

export default {
    name: 'BienIci_RangeSelector',
    mixins: [translationMixin],
    model: {
        prop: 'values',
        event: 'change'
    },
    props: {
        range: {
            type: Number,
            default: 5,
        },
        values: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            classes: {
                root: [
                    `${this.$options.name}`,
                    'flex',
                    'border border-1',
                    'border-solid',
                    'border-gray-400',
                ],
                element: [
                    `${this.$options.name}__element`,
                    'text-center',
                    'flex-1',
                    'justify-center',
                    'py-2',
                    'hover:text-bienici-blue',
                    'hover:cursor-pointer',
                ],
            },
        }
    },
    methods: {
        onClick(index) {
            //TODO
            //Specifics rules with ranges

            if (this.values.includes(index)) {
                this.$emit('change', this.values.filter(value => value !== index))
            } else {
                this.$emit('change', [index, ...this.values])
            }
        },
        getElementClass(index) {
            let cssClass = this.classes['element']

            if (this.values.includes(index)) {
                cssClass = cssClass.concat([
                    'bg-bienici-blue',
                    'text-white',
                    'hover:text-bienici-blue',
                    'hover:text-white',
                ])
            }

            return cssClass
        },
    },
}
</script>
