<template>
  <v-container class="fill-height" fluid>
    <v-row class="fill-height" align="stretch">
      <v-col cols="3">
        <v-card class="d-flex flex-column fill-height" outlined>
          <v-card-title class="overline">Organization Structure</v-card-title>

          <v-card-text style="min-height: 0;">
            <div class="d-flex fill-height overflow-auto">
              <v-treeview expand-icon="fas fa-angle-down" :items="orgs">
                <template v-slot:prepend>
                  <v-icon right color="grey darken-3" small>fa-sitemap</v-icon>
                </template>
                <template v-slot:label="{ item }">
                  <div>{{ item.name }}</div>
                </template>
              </v-treeview>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card class="d-flex flex-column fill-height" outlined>
          <v-card-title class="overline">Users</v-card-title>

          <v-card-text style="min-height: 0;">
            <div class="d-flex fill-height overflow-auto">
              <v-list>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">fas fa-user-tie</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Mohammed Al-Zaid</v-list-item-title>
                    <v-list-item-subtitle>Manager</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">fas fa-user-tie</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Khalid Al-Mansour</v-list-item-title>
                    <v-list-item-subtitle>Division Head</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">fas fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Abdullah Al-Qahtani</v-list-item-title>
                    <v-list-item-subtitle>Lead Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">fas fa-user-cog</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Mohannad Al-Awad</v-list-item-title>
                    <v-list-item-subtitle>Administrator</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon style="width: 16px;">
                    <v-icon color="grey darken-3">far fa-user</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bedah Al-Shahrani</v-list-item-title>
                    <v-list-item-subtitle>Assessor</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card outlined>
          <v-card-title class="overline">OE Models</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
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
                      <v-menu offset-x>
                        <template v-slot:activator="{ on }">
                          <v-list-item v-on="on">
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
                        </template>

                        <v-card>
                          <v-card-text>Test</v-card-text>
                        </v-card>
                      </v-menu>
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
                    </v-list-item-group>
                  </v-list-group>
                </v-list>
              </v-col>

              <v-col></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.component('Configuration', {
    data: () => ({
      orgs: [
        {
          id: '1',
          name: 'Upstream',
          children: [
            {
              id: '1.1',
              name: 'Organization 1',
              children: [
                {
                  id: '1.1.1',
                  name: 'Organization 1',
                  children: [
                    {
                      id: '1.1.1.1',
                      name: 'Organization 1',
                      children: [
                        {
                          id: '1.1.1.1.1',
                          name: 'Organization 1',
                          children: [
                            {
                              id: '1.1.1.1.1.1',
                              name: 'Organization 1',
                                children: [
                                  {
                                    id: '1.1.1.1.1.1.1',
                                    name: 'Organization 1'
                                  },
                                  {
                                    id: '1.1.1.1.1.1.1.2',
                                    name: 'Organization 2'
                                  }
                                ]
                            },
                            {
                              id: '1.1.1.1.1.2',
                              name: 'Organization 2'
                            }
                          ]
                        },
                        {
                          id: '1.1.1.1.2',
                          name: 'Organization 2'
                        }
                      ]
                    },
                    {
                      id: '1.1.1.2',
                      name: 'Organization 2'
                    }
                  ]
                },
                {
                  id: '1.1.2',
                  name: 'Organization 2'
                }
              ]
            },
            {
              id: '1.2',
              name: 'Organization 2'
            }
          ]
        },
        {
          id: '2',
          name: 'Downstream',
          children: [
            {
              id: '2.1',
              name: 'Organization 1'
            },
            {
              id: '2.2',
              name: 'Organization 2'
            }
          ]
        }
      ]
    })
  })
</script>
