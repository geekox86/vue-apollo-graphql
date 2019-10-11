<template>
  <v-card class="mb-4" outlined>
    <v-card-title>
      <span class="align-self-start overline">Assessment Summary</span>

      <v-spacer></v-spacer>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click.stop="$root.showAssessmentMembers = true">
            <v-icon color="grey darken-3" small>fas fa-users</v-icon>
          </v-btn>
        </template>

        <span>Show assessment members</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="grey darken-3" small>far fa-clone</v-icon>
          </v-btn>
        </template>

        <span>Copy summary charts</span>
      </v-tooltip>
    </v-card-title>

    <v-card-text>
      <v-row style="height: 320px;">
        <v-col cols="6">
          <e-charts :options="enablingElements"></e-charts>
        </v-col>
        <v-col cols="6">
          <e-charts :options="focusAreas"></e-charts>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import 'echarts/lib/chart/radar'

  import ECharts from 'vue-echarts/components/ECharts.vue'
  import Vue from 'vue'

  export default Vue.component('SummaryCharts', {
    components: { ECharts },
    data: () => ({
      enablingElements: {
        title: {
          text: 'Enabling Elements'
        },
        radar: {
          shape: 'circle',
          indicator: [
            { name: 'EE1', max: 4 },
            { name: 'EE2', max: 4 },
            { name: 'EE3', max: 4 },
            { name: 'EE4', max: 4 },
            { name: 'EE5', max: 4 },
            { name: 'EE6', max: 4 },
            { name: 'EE7', max: 4 }
          ],
          splitNumber: 4
        },
        series: [
          {
            type: 'radar',
            name: 'Test',
            data: [[1, 2, 3, 4, 2, 3, 4]]
          }
        ]
      },
      focusAreas: {
        title: {
          text: 'Focus Areas'
        },
        radar: {
          shape: 'circle',
          indicator: [
            { name: 'FA1', max: 4 },
            { name: 'FA2', max: 4 },
            { name: 'FA3', max: 4 },
            { name: 'FA4', max: 4 }
          ],
          splitNumber: 4
        },
        series: [
          {
            type: 'radar',
            name: 'Test',
            data: [[4, 2, 3, 3]]
          }
        ]
      }
    })
  })
</script>
