import FakeSelect from './FakeSelect.vue'

export default {
    title: 'FakeSelect',
    component: FakeSelect,
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { FakeSelect },
        template: '<FakeSelect v-bind="$props"></FakeSelect>',
    }),
    argTypes: {
        text: {},
    },
}

export const Primary = {
    args: {
        text: 'Pièces',
    },
}
