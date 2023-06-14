<template>
    <div>
        <FakeSelect text="Pièces" @click.native="showModal = true" />

        <Modal v-if="showModal" @close="showModal = false">
            <ModalLayout>
                <template v-slot:title>
                    Titre
                </template>
                <template v-slot:content>
                    <InputLayout>
                        <template v-slot:label>Nombre de pièces</template>
                        <template v-slot:input>
                            <RangeSelector :translations="roomsTranslations" v-model="rooms"/>
                        </template>
                    </InputLayout>
                    <br>
                    <InputLayout>
                        <template v-slot:label>Nombre de chambres</template>
                        <template v-slot:input>
                            <RangeSelector :translations="chambersTranslations" v-model="chambers"/>
                        </template>
                    </InputLayout>
                </template>
                <template v-slot:footer>
                    <Button @click.native="showModal = false">
                        Continuer (19 481 annonces)
                    </Button>
                </template>
            </ModalLayout>
        </Modal>
    </div>
</template>

<script>
import FakeSelect from '@/components/UI/FakeSelect/FakeSelect.vue'
import Modal from '@/components/UI/Modal/Modal.vue'
import ModalLayout from '@/components/UI/ModalLayout/ModalLayout.vue'
import RangeSelector from '@/components/UI/RangeSelector/RangeSelector.vue'
import InputLayout from '@/components/UI/InputLayout/InputLayout.vue'
import Button from '@/components/UI/Button/Button.vue'

export default {
    name: "HelloWorld",
    components: {
        FakeSelect,
        Modal,
        ModalLayout,
        RangeSelector,
        InputLayout,
        Button,
    },
    data() {
        return {
            showModal: false,
            roomsTranslations: {
                fr: {
                    '1': 'Studio',
                    '5': '5+',
                }
            },
            rooms: [],
            chambersTranslations: {
                fr: {
                    '5': '5+',
                }
            },
            chambers: [],
        }
    },
}
</script>
