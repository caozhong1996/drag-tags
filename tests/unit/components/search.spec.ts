import { shallowMount } from '@vue/test-utils'
import search from '@/components/search.vue'

describe('search.vue', () => {
  it('search.vue should show title', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = shallowMount(search, {
      attachTo: elem
    })
    expect(wrapper.text()).toContain('Lorem ipsum dolor sit amet')
    wrapper.unmount()
  })
})
