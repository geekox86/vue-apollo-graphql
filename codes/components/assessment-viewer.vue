<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col cols="12">
        <SummaryCharts></SummaryCharts>

        <v-card outlined>
          <v-card-title>
            <v-row no-gutters>
              <v-col cols="3">
                <v-row no-gutters>
                  <span class="overline align-self-start">Assessment Component</span>
                </v-row>
              </v-col>

              <v-col cols="6">
                <v-row justify="center" no-gutters>
                  <v-chip link @click.stop="$root.showAssessmentComponents = true">
                    <v-icon class="mr-3" color="grey darken-3" small>fas fa-cogs</v-icon>
                    <strong>Enabling Element 1</strong>
                    <span class="ml-1">– Process 1</span>
                  </v-chip>
                </v-row>
              </v-col>

              <v-col cols="3"></v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-card class="mb-4" outlined>
              <v-card-title class="overline">Objective</v-card-title>
              <v-card-text>The purpose of this process is to...</v-card-text>
            </v-card>

            <ScoringMatrix></ScoringMatrix>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div style="position: fixed; bottom: 16px; right: 16px; z-index: 10;">
      <v-tooltip top v-if="!isEditing">
        <template v-slot:activator="{ on }">
          <v-btn fab color="grey darken-2" v-on="on" @click="isEditing = !isEditing">
            <v-icon color="white">fas fa-pen</v-icon>
          </v-btn>
        </template>

        <span>Edit assessment</span>
      </v-tooltip>

      <v-tooltip top v-if="isEditing">
        <template v-slot:activator="{ on }">
          <v-btn fab color="grey darken-2" v-on="on" @click="isEditing = !isEditing">
            <v-icon color="white">fas fa-check</v-icon>
          </v-btn>
        </template>

        <span>Save changes</span>
      </v-tooltip>

      <v-tooltip top v-if="isEditing">
        <template v-slot:activator="{ on }">
          <v-btn fab color="grey darken-2" v-on="on" @click="isEditing = !isEditing" class="mr-1">
            <v-icon color="white">fas fa-times</v-icon>
          </v-btn>
        </template>

        <span>Cancel changes</span>
      </v-tooltip>
    </div>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  import AssessmentComponents from '@/codes/components/assessment-components.vue'
  import AssessmentMembers from '@/codes/components/assessment-members.vue'
  import ScoringMatrix from '@/codes/components/scoring-matrix.vue'
  import SummaryCharts from '@/codes/components/summary-charts.vue'

  export default Vue.component('AssessmentViewer', {
    components: {
      AssessmentComponents,
      AssessmentMembers,
      ScoringMatrix,
      SummaryCharts
    },
    data: () => ({ isEditing: false })
  })
</script>
