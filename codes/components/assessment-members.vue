<template>
  <v-card>
    <v-navigation-drawer app clipped temporary right v-model="$root.showAssessmentMembers" width="25vw" class="pa-2">
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
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('AssessmentMembers', {})
</script>
