import VueApolloGraphQLPlugin from '@/codes/index'
import { mocked } from 'ts-jest/utils'
import Vue from 'vue'

jest.mock('vue')

beforeEach(() => {
  jest.clearAllMocks()
})

test('VueApolloGraphQLPlugin should extend Vue.prototype with $apollo', () => {
  const MockedVue = mocked(Vue)

  // @ts-ignore
  expect(MockedVue.prototype.$apollo).toBeUndefined()

  // todo: use MockedVue instead of Vue
  VueApolloGraphQLPlugin(Vue, [])

  // @ts-ignore
  expect(MockedVue.prototype.$apollo).toBeDefined()
})
