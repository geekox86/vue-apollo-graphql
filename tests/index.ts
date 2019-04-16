import VueApolloGraphQLPlugin from '@/codes/index'
import { mocked } from 'ts-jest/utils'
import Vue from 'vue'

jest.mock('vue')

describe('Vue Apollo GraphQL Plugin', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should extend Vue prototype with $apollo', () => {
    const MockedVue = mocked(Vue, true)
    
    expect(MockedVue.prototype.$apollo).toBeUndefined()
    
    MockedVue.use(VueApolloGraphQLPlugin, [])

    expect(MockedVue.prototype.$apollo).toBeDefined()
  })
})
