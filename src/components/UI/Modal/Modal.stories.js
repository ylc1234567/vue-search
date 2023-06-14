import Modal from './Modal.vue'
import ModalLayout from '@/components/UI/ModalLayout/ModalLayout.vue'
import Button from '@/components/UI/Button/Button.vue'

const template = `
<Modal :hideCloseButton="hideCloseButton">
    <ModalLayout>
        <template v-slot:title>
            Titre
        </template>
        <template v-slot:content>
            Content
        </template>
        <template v-slot:footer>
            <Button>
                Continuer (19 481 annonces)
            </Button>
        </template>
    </ModalLayout>
</Modal>
`

export default {
    title: 'Modal',
    component: Modal,
    // tags: ['autodocs'],
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: {
            Modal,
            ModalLayout,
            Button,
        },
        template,
    }),
    argTypes: {
        hideCloseButton: {},
    },
}

export const Primary = {
    args: {
        hideCloseButton: false,
    },
}
