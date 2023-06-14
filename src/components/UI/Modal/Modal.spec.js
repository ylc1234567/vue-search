import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Modal from './Modal.vue'

const fixtures = {
    propsData: {
        msg: 'Hello Vitest'
    }
}

describe('Modal', () => {
    it('renders properly', () => {
        const wrapper = mount(Modal, {
            propsData: {
                msg: 'Hello Vitest'
            }
        })
        expect(wrapper.text()).toContain(fixtures.propsData.msg)
    })
})
