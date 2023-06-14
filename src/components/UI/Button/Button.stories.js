import Button from './Button.vue'

export default {
    title: 'Button',
    component: Button,
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { Button },
        template: '<Button>{{ $props.text }}</Button>',
    }),
    argTypes: {
        text: {},
    },
}

export const Primary = {
    args: {
        text: 'Button',
    },
}
