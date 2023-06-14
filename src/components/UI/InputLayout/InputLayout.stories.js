import InputLayout from './InputLayout.vue'

const template = `
<InputLayout>
    <template v-slot:label>
        {{ $props.label }}
    </template>
    <template v-slot:input>
        <input type="text"/>
    </template>
</InputLayout>
`

export default {
    title: 'InputLayout',
    component: InputLayout,
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { InputLayout },
        template,
    }),
    argTypes: {
        title: {},
        content: {},
        footer: {},
    },
}

export const Primary = {
    args: {
        label: 'Label',
    },
}
