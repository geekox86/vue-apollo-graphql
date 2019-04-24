import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $jsxProps: Partial<this>
  }
}
