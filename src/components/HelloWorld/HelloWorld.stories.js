import HelloWorld from './HelloWorld.vue'

export default {
    title: 'HelloWorld',
    component: HelloWorld,
    // tags: ['autodocs'],
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { HelloWorld },
        template: '<HelloWorld v-bind="$props" />',
    }),
    argTypes: {
    },
}

export const Primary = {
    args: {
        primary: true,
        label: 'HelloWorld',
    },
}
