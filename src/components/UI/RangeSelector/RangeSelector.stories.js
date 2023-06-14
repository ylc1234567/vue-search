import RangeSelector from './RangeSelector.vue'

const template = `
<RangeSelector
    :translations="translations"
    :values="levels" @change="levels = $event"
    class="m-2"/>
`

export default {
    title: 'RangeSelector',
    component: RangeSelector,
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { RangeSelector },
        template,
    }),
    argTypes: {
        levels: {},
        translations: {},
        range: {},
    },
}

export const Pieces = {
    args: {
        translations: {
            fr: {
                '1': 'Studio',
                '5': '5+',
            }
        },
    },
}

export const Chambres = {
    args: {
        translations: {
            fr: {
                '5': '5+',
            }
        },
    },
}
