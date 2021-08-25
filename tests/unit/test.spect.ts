
import './utils/matchMedia.mock'
// import { shallowMount } from '@vue/test-utils'
// import TestComponent from '~/components/Test.vue'
// import Footer from '~/components/Footer.vue'
import { returnVal } from '~/utils/test'
// import { getI18n } from '~/modules/i18n'

// jest暂时还不支持vite的import.meta.env，暂时无法进行vue组件测试
// https://github.com/vitejs/vite/issues/1955
// test('Vue component test', async() => {
//   const wrapper = shallowMount(TestComponent, {
//     global: {
//       plugins: [getI18n()],
//       mocks: {
//         $t: (key: string) => key,
//       },
//     },
//   })

//   expect(wrapper.html()).toContain('test')
// })

// test('Vue footer component test', async() => {
//   const footer = shallowMount(Footer)
//   expect(footer.html()).toContain('footer')
// })

test('return value', async() => {
  expect(returnVal('test')).toEqual('test')
})

test('hello jest', async() => {
  expect('jest').toEqual('jest')
})
