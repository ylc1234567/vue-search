import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

const fixtures = {
    propsData: {
        msg: 'Hello Vitest'
    }
}

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(HelloWorld, {
            propsData: {
                msg: 'Hello Vitest'
            }
        })
        expect(wrapper.text()).toContain(fixtures.propsData.msg)
    })
})
