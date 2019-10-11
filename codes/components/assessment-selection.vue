<template>
  <v-dialog scrollable width="50vw">
    <template v-slot:activator="{ on }">
      <slot :on="on"></slot>
    </template>

    <v-card>
      <v-card-title class="grey lighten-3">OE Assessments</v-card-title>

      <v-card-text style="height: 50vh;">
        <v-treeview activatable hoverable open-on-click expand-icon="fas fa-angle-down" :items="assessmentsByOrgs">
          <template v-slot:prepend="{ item }">
            <v-icon right color="grey darken-3" small v-if="item.type == 'org'">fa-sitemap</v-icon>
            <v-icon right color="grey darken-3" small v-if="item.type == 'assessment'">fas fa-ruler</v-icon>
          </template>
          <template v-slot:label="{ item }">
            <div>{{ item.name }}</div>
          </template>
        </v-treeview>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text small>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn text small>View Assessment</v-btn>
        <v-btn text small>Create Assessment</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('AssessmentSelection', {
    data: () => ({
      assessmentsByOrgs: [
        {
          id: 'US',
          type: 'org',
          name: 'Upstream',
          children: [
            {
              id: 'Admin Area 1',
              type: 'org',
              name: 'Admin Area 1',
              children: [
                {
                  id: 'Department 1',
                  type: 'org',
                  name: 'Department 1',
                  children: [
                    {
                      id: '2016',
                      type: 'assessment',
                      name: '2016 Corporate Assessment'
                    },
                    {
                      id: '2017',
                      type: 'assessment',
                      name: '2017 Corporate Assessment'
                    },
                    {
                      id: '2018',
                      type: 'assessment',
                      name: '2018 Corporate Assessment'
                    }
                  ]
                },
                {
                  id: 'Department 2',
                  type: 'org',
                  name: 'Department 2'
                },
                {
                  id: 'Department 3',
                  type: 'org',
                  name: 'Department 3'
                }
              ]
            }
          ]
        },
        {
          id: 'DS',
          type: 'org',
          name: 'Downstream',
          children: [
            {
              id: 'Admin Area 1',
              type: 'org',
              name: 'Admin Area 1',
              children: [
                {
                  id: 'Department 1',
                  type: 'org',
                  name: 'Department 1',
                  children: [
                    {
                      id: '2016',
                      type: 'assessment',
                      name: '2016 Corporate Assessment'
                    },
                    {
                      id: '2017',
                      type: 'assessment',
                      name: '2017 Corporate Assessment'
                    },
                    {
                      id: '2018',
                      type: 'assessment',
                      name: '2018 Corporate Assessment'
                    }
                  ]
                },
                {
                  id: 'Department 2',
                  type: 'org',
                  name: 'Department 2'
                },
                {
                  id: 'Department 3',
                  type: 'org',
                  name: 'Department 3'
                }
              ]
            }
          ]
        },
        {
          id: 'TS',
          type: 'org',
          name: 'Technical Services',
          children: [
            {
              id: 'Admin Area 1',
              type: 'org',
              name: 'Admin Area 1',
              children: [
                {
                  id: 'Department 1',
                  type: 'org',
                  name: 'Department 1',
                  children: [
                    {
                      id: '2016',
                      type: 'assessment',
                      name: '2016 Corporate Assessment'
                    },
                    {
                      id: '2017',
                      type: 'assessment',
                      name: '2017 Corporate Assessment'
                    },
                    {
                      id: '2018',
                      type: 'assessment',
                      name: '2018 Corporate Assessment'
                    }
                  ]
                },
                {
                  id: 'Department 2',
                  type: 'org',
                  name: 'Department 2'
                },
                {
                  id: 'Department 3',
                  type: 'org',
                  name: 'Department 3'
                }
              ]
            }
          ]
        },
        {
          id: 'OBS',
          type: 'org',
          name: 'Operation & Business Services',
          children: [
            {
              id: 'Admin Area 1',
              type: 'org',
              name: 'Admin Area 1',
              children: [
                {
                  id: 'Department 1',
                  type: 'org',
                  name: 'Department 1',
                  children: [
                    {
                      id: '2016',
                      type: 'assessment',
                      name: '2016 Corporate Assessment'
                    },
                    {
                      id: '2017',
                      type: 'assessment',
                      name: '2017 Corporate Assessment'
                    },
                    {
                      id: '2018',
                      type: 'assessment',
                      name: '2018 Corporate Assessment'
                    }
                  ]
                },
                {
                  id: 'Department 2',
                  type: 'org',
                  name: 'Department 2'
                },
                {
                  id: 'Department 3',
                  type: 'org',
                  name: 'Department 3'
                }
              ]
            }
          ]
        },
        {
          id: 'LAW',
          type: 'org',
          name: 'Law',
          children: [
            {
              id: 'Admin Area 1',
              type: 'org',
              name: 'Admin Area 1',
              children: [
                {
                  id: 'Department 1',
                  type: 'org',
                  name: 'Department 1',
                  children: [
                    {
                      id: '2016',
                      type: 'assessment',
                      name: '2016 Corporate Assessment'
                    },
                    {
                      id: '2017',
                      type: 'assessment',
                      name: '2017 Corporate Assessment'
                    },
                    {
                      id: '2018',
                      type: 'assessment',
                      name: '2018 Corporate Assessment'
                    }
                  ]
                },
                {
                  id: 'Department 2',
                  type: 'org',
                  name: 'Department 2'
                },
                {
                  id: 'Department 3',
                  type: 'org',
                  name: 'Department 3'
                }
              ]
            }
          ]
        }
      ]
    })
  })
</script>
