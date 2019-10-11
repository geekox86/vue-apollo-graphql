<template>
  <v-app>
    <v-app-bar app>
      <v-col cols="2">
        <v-row no-gutters>
          <v-icon class="mr-4" color="grey darken-3">fa-ruler-combined</v-icon>
          <v-toolbar-title>OE Scoring</v-toolbar-title>
        </v-row>
      </v-col>

      <v-col cols="8">
        <v-row justify="center" no-gutters>
          <AssessmentSelection>
            <template v-slot:default="{ on }">
              <v-chip link v-on="on">
                <v-icon class="mr-3" color="grey darken-3" small>fa-sitemap</v-icon>
                <strong>Operational Excellence Department (30003300)</strong>
                <span class="ml-1">– Corporate Assessment (August 2019)</span>
              </v-chip>
            </template>
          </AssessmentSelection>
        </v-row>
      </v-col>

      <v-col cols="2">
        <v-row align="center" justify="end" no-gutters>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text outlined rounded small v-on="on">OE Model 1.0</v-btn>
            </template>

            <v-list dense>
              <v-list-item @click="">
                <v-list-item-title>OE Model 1.0</v-list-item-title>
              </v-list-item>
              <v-list-item @click="">
                <v-list-item-title>OE Model 1.1</v-list-item-title>
              </v-list-item>
              <v-list-item @click="">
                <v-list-item-title>OE Model 2.0</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

<!--          <v-tooltip bottom>-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn class="ml-2" icon v-on="on" @click="showAssessmentViewer = !showAssessmentViewer">-->
<!--                <v-icon color="grey darken-3">fas fa-cogs</v-icon>-->
<!--              </v-btn>-->
<!--            </template>-->

<!--            <span>Edit configuration</span>-->
<!--          </v-tooltip>-->
        </v-row>
      </v-col>
    </v-app-bar>

    <AssessmentComponents></AssessmentComponents>
    <AssessmentMembers></AssessmentMembers>

    <v-content>
      <AssessmentViewer v-if="showAssessmentViewer"></AssessmentViewer>
      <Configuration v-else></Configuration>
    </v-content>

    <v-footer app>
      <v-row justify="center">
        <v-icon class="mr-2" color="grey darken-3" x-small>far fa-copyright</v-icon>
        <span class="overline">Operational Excellence Department</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  import AssessmentSelection from '@/codes/components/assessment-selection.vue'
  import AssessmentViewer from '@/codes/components/assessment-viewer.vue'
  import Configuration from '@/codes/components/configuration.vue'

  export default Vue.component('App', {
    components: {
      AssessmentSelection,
      AssessmentViewer,
      Configuration
    },
    data: () => ({
      showAssessmentViewer: true
    })
  })
</script>

<style src="@/codes/globals.css"></style>
