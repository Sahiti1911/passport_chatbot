import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('header').exists()).toBe(true)
  })
})
