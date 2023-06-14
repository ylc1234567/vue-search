import ModalLayout from './ModalLayout.vue'

const template = `
<ModalLayout>
    <template v-slot:title>
        {{ $props.title }}
    </template>
    <template v-slot:content>
        {{ $props.content }}
    </template>
    <template v-slot:footer>
        {{ $props.footer }}
    </template>
</ModalLayout>
`

export default {
    title: 'ModalLayout',
    component: ModalLayout,
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { ModalLayout },
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
        title: 'Title',
        content: 'Content',
        footer: 'Footer',
    },
}
