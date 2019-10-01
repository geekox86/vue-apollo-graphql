<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col cols="3">
        <v-card outlined>
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
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card outlined>
          <v-card-title class="overline">Component Scoring</v-card-title>

          <v-card-text>
            <v-card class="mb-4" outlined>
              <v-card-title class="overline">Objective</v-card-title>
              <v-card-text>The purpose of this process is to...</v-card-text>
            </v-card>

            <v-card class="mb-4" outlined>
              <v-card-title class="overline">Summary Charts</v-card-title>
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

            <v-card outlined>
              <v-card-title class="overline">Scoring Matrix</v-card-title>
              <v-card-text>
                <v-container class="overflow-x-auto">
              <v-row class="flex-nowrap" align="stretch">
                <v-col class="d-flex grey lighten-5" cols="3">
                  <span class="ma-auto grey--text text--darken-3">Score</span>
                </v-col>
                <v-col class="red lighten-5" cols="8">
                  <v-avatar class="d-flex mx-auto" color="red" size="30">
                    <span class="white--text caption">0</span>
                  </v-avatar>
                </v-col>
                <v-col class="orange lighten-5" cols="8">
                  <v-avatar class="d-flex mx-auto" color="orange darken-2" size="30">
                    <span class="white--text caption">1</span>
                  </v-avatar>
                </v-col>
                <v-col class="yellow lighten-5" cols="8">
                  <v-avatar class="d-flex mx-auto" color="yellow darken-2" size="30">
                    <span class="white--text caption">2</span>
                  </v-avatar>
                </v-col>
                <v-col class="light-green lighten-5" cols="8">
                  <v-avatar class="d-flex mx-auto" color="light-green darken-2" size="30">
                    <span class="white--text caption">3</span>
                  </v-avatar>
                </v-col>
                <v-col class="green lighten-4" cols="8">
                  <v-avatar class="d-flex mx-auto" color="green darken-2" size="30">
                    <span class="white--text caption">4</span>
                  </v-avatar>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-row class="flex-nowrap" align="stretch">
                <v-col class="d-flex grey lighten-5" cols="3">
                  <v-row class="px-3" align="center">
                    <span class="grey--text text--darken-3">Plan</span>
                    <v-avatar class="ml-auto" color="teal" size="30">
                      <span class="white--text caption">2.2</span>
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="red lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="orange lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="yellow lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="light-green lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="green lighten-4" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-row class="flex-nowrap" align="stretch">
                <v-col class="d-flex grey lighten-5" cols="3">
                  <v-row class="px-3" align="center">
                    <span class="grey--text text--darken-3">Do</span>
                    <v-avatar class="ml-auto" color="teal" size="30">
                      <span class="white--text caption">2.2</span>
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="red lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="orange lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="yellow lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="light-green lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="green lighten-4" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-row class="flex-nowrap" align="stretch">
                <v-col class="d-flex grey lighten-5" cols="3">
                  <v-row class="px-3" align="center">
                    <span class="grey--text text--darken-3">Check</span>
                    <v-avatar class="ml-auto" color="teal" size="30">
                      <span class="white--text caption">2.2</span>
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="red lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="orange lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="yellow lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="light-green lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="green lighten-4" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-row class="flex-nowrap" align="stretch">
                <v-col class="d-flex grey lighten-5" cols="3">
                  <v-row class="px-3" align="center">
                    <span class="grey--text text--darken-3">Adjust</span>
                    <v-avatar class="ml-auto" color="teal" size="30">
                      <span class="white--text caption">2.2</span>
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="red lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="red"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="orange lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="orange darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="yellow lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="yellow darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="light-green lighten-5" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="light-green"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="green lighten-4" cols="8">
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 1</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 2</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox color="green darken-2"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>Criteria 3</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
              </v-card-text>
            </v-card>

            <v-container>
              <v-row>
                <v-col>
                  <v-card outlined>
                    <v-card-title class="overline">Strengths</v-card-title>
                    <v-list>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">1</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example strength 1</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">2</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example strength 2</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">3</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example strength 3</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">4</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example strength 4</v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>

                <v-col>
                  <v-card outlined>
                    <v-card-title class="overline">Areas for Improvement</v-card-title>
                    <v-list>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">1</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example area for Improvement 1</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">2</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example area for Improvement 2</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-avatar class="ml-auto" color="grey lighten-3" size="30">
                            <span class="caption">3</span>
                          </v-avatar>
                        </v-list-item-icon>
                        <v-list-item-content>Example area for Improvement 3</v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card outlined>
          <v-card-title class="overline">Assessment Members</v-card-title>

          <v-list>
            <v-subheader>OED Team</v-subheader>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Abdullah Al-Qahtani</v-list-item-title>
                <v-list-item-subtitle>Lead Assessor</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">far fa-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Mohannad Al-Awad</v-list-item-title>
                <v-list-item-subtitle>Assessor</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">far fa-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                <v-list-item-subtitle>Assessor</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-subheader>Proponent Team</v-subheader>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-user-tie</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Abdullah Al-Qahtani</v-list-item-title>
                <v-list-item-subtitle>Manager</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">fas fa-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Mohannad AL-Awad</v-list-item-title>
                <v-list-item-subtitle>Coordinator</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="grey darken-3">far fa-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                <v-list-item-subtitle>Backup Coordinator</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import 'echarts/lib/chart/radar'

  import ECharts from 'vue-echarts/components/ECharts.vue'
  import Vue from 'vue'

  export default Vue.component('AssessmentViewer', {
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
