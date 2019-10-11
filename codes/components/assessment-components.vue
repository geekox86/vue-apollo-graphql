<template>
  <v-card>
    <v-navigation-drawer app temporary v-model="$root.showAssessmentComponents" width="25vw" class="pa-2">
      <v-card-title class="overline">Assessment Components</v-card-title>

      <v-text-field class="mx-3" placeholder="Filter..." solo hide-details>
        <template v-slot:append>
          <v-icon color="grey" small>fa-search</v-icon>
        </template>
      </v-text-field>

      <v-list>
        <v-subheader>Enabling Elements</v-subheader>

        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fas fa-cubes</v-icon>
            </v-list-item-icon>

            <v-list-item-title>EE 1</v-list-item-title>

            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fas fa-cubes</v-icon>
            </v-list-item-icon>
            <v-list-item-title>EE 2</v-list-item-title>
            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fas fa-cubes</v-icon>
            </v-list-item-icon>
            <v-list-item-title>EE 3</v-list-item-title>
            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Process 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-subheader>Focus Areas</v-subheader>
        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fa-crosshairs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FA 1</v-list-item-title>
            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fa-crosshairs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FA 2</v-list-item-title>
            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-list-group append-icon="">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="grey darken-3">fa-crosshairs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FA 3</v-list-item-title>
            <v-list-item-avatar>
              <v-avatar color="teal" size="30">
                <span class="white--text caption">3.3</span>
              </v-avatar>
            </v-list-item-avatar>
          </template>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 2</v-list-item-title>
              <v-list-item-avatar>
                <v-avatar color="teal" size="30">
                  <span class="white--text caption">3.3</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-chart-line</v-icon>
              </v-list-item-icon>
              <v-list-item-title>KPI 1</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('AssessmentComponents', {})
</script>
