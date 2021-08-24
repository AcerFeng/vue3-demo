
import './utils/matchMedia.mock'
import { mount } from '@vue/test-utils'
import Test from '~/components/Test.vue'
import Footer from '~/components/Footer.vue'
import { returnVal } from '~/utils/test'

test('Vue component test', async() => {
  // console.log(vue3jest)
  const wrapper = mount(Test)

  expect(wrapper.html()).toContain('test')

  // const footer = mount(Footer)
})

test('Vue footer component test', async() => {
  const footer = mount(Footer)
  expect(footer.html()).toContain('footer')
})

test('return value', async() => {
  expect(returnVal('test')).toEqual('test')
})

test('hello jest', async() => {
  expect('jest').toEqual('jest')
})
