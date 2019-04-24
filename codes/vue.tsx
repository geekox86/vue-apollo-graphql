import { VNode } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class V extends Vue {
  @Prop(String)
  public readonly p: string | undefined

  public render(): VNode {
    return <div>Testing {this.p}</div>
  }
}

const v = <V p='hello' />

export default v
