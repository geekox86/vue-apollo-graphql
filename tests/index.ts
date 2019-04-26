import VueApolloGraphQLPlugin from '@/codes/index'
import Vue from 'vue'

jest.mock('vue')

beforeEach(() => {
  jest.clearAllMocks()
})

test('VueApolloGraphQLPlugin should extend Vue.prototype with $apollo', () => {
  expect(Vue.prototype.$apollo).toBeUndefined()

  VueApolloGraphQLPlugin(Vue, [])

  expect(Vue.prototype.$apollo).toBeDefined()
})
