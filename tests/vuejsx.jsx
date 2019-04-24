import { Component, Vue, Prop } from 'vue-property-decorator'

test('Vue JSX', () => {
  @Component
  class V extends Vue {
    @Prop(String)
    p

    render() {
      return <div>Testing {this.p}</div>
    }
  }

  const v = <V p='hello' />

  expect(v).toBe(V)
})
