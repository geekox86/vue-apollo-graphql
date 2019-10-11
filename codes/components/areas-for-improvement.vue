<template>
  <v-dialog scrollable width="50vw">
    <template v-slot:activator="{ on }">
      <slot :on="on"></slot>
    </template>

    <v-card>
      <v-card-title class="flex-column align-start grey lighten-3">
        <span>Areas for Improvements</span>
        <span class="body-2">Process is in place and partially documented and approved by management</span>
      </v-card-title>

      <v-card-text class="px-0" style="height: 50vh;">
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-avatar class="white--text" color="deep-orange" size="30">
                <span class="body-2">1</span>
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>Example area for Improvement 1</v-list-item-content>

            <v-list-item-action>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon color="grey darken-2" small>fas fa-trash-alt</v-icon>
                  </v-btn>
                </template>

                <span>Remove area for improvement</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-avatar class="white--text" color="deep-orange" size="30">
                <span class="body-2">2</span>
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>Example area for Improvement 2</v-list-item-content>

            <v-list-item-action>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon color="grey darken-2" small>fas fa-trash-alt</v-icon>
                  </v-btn>
                </template>

                <span>Remove area for improvement</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-avatar class="white--text" color="deep-orange" size="30">
                <span class="body-2">3</span>
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>Example area for Improvement 3</v-list-item-content>

            <v-list-item-action>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon color="grey darken-2" small>fas fa-trash-alt</v-icon>
                  </v-btn>
                </template>

                <span>Remove area for improvement</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text small>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn text small>Add Area for Improvement</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('AreasForImprovement', {})
</script>
