<template>
  <v-app>
    <v-btn>Test</v-btn>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import helper from '@/codes/helper'

  export default Vue.component('App', {
      data: {
          test: helper
      }
  })
</script>

<style src="@/codes/globals.css"></style>

<style scoped>
  div {
    background: pink;
  }
</style>
