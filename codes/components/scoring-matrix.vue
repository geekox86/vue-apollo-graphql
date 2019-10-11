<template>
  <v-card outlined>
    <v-card-title>
      <span class="align-self-start overline">Scoring Matrix</span>

      <v-spacer></v-spacer>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="grey darken-3" small>far fa-clone</v-icon>
          </v-btn>
        </template>

        <span>Copy scoring matrix</span>
      </v-tooltip>
    </v-card-title>

    <v-card-text>
      <v-container class="overflow-x-auto">
        <v-row class="flex-nowrap" align="stretch">
          <v-col class="d-flex grey lighten-5" cols="2">
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
          <v-col class="d-flex grey lighten-5" cols="2">
            <v-row class="px-3" align="center">
              <span class="grey--text text--darken-3">Plan</span>
              <v-avatar class="ml-auto" color="teal" size="30">
                <span class="white--text caption">2.2</span>
              </v-avatar>
            </v-row>
          </v-col>

          <v-col class="red lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <Strengths>
                      <template v-slot:default="{ on }">
                        <v-chip color="green" outlined pill link v-on="on">
                          Strengths
                          <v-avatar class="white--text" right color="green">33</v-avatar>
                        </v-chip>
                      </template>
                    </Strengths>
                    <AreasForImprovement>
                      <template v-slot:default="{ on }">
                        <v-chip color="deep-orange" outlined pill link v-on="on">
                          AFI's
                          <v-avatar class="white--text" right color="deep-orange">99</v-avatar>
                        </v-chip>
                      </template>
                    </AreasForImprovement>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Some other criteria</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">33</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">99</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Some other criteria</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">33</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">99</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="orange lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="yellow lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="light-green lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="green lighten-4" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="flex-nowrap" align="stretch">
          <v-col class="d-flex grey lighten-5" cols="2">
            <v-row class="px-3" align="center">
              <span class="grey--text text--darken-3">Do</span>
              <v-avatar class="ml-auto" color="teal" size="30">
                <span class="white--text caption">2.2</span>
              </v-avatar>
            </v-row>
          </v-col>

          <v-col class="red lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="orange lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="yellow lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="light-green lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="green lighten-4" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="flex-nowrap" align="stretch">
          <v-col class="d-flex grey lighten-5" cols="2">
            <v-row class="px-3" align="center">
              <span class="grey--text text--darken-3">Check</span>
              <v-avatar class="ml-auto" color="teal" size="30">
                <span class="white--text caption">2.2</span>
              </v-avatar>
            </v-row>
          </v-col>

          <v-col class="red lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="orange lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="yellow lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="light-green lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="green lighten-4" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="flex-nowrap" align="stretch">
          <v-col class="d-flex grey lighten-5" cols="2">
            <v-row class="px-3" align="center">
              <span class="grey--text text--darken-3">Adjust</span>
              <v-avatar class="ml-auto" color="teal" size="30">
                <span class="white--text caption">2.2</span>
              </v-avatar>
            </v-row>
          </v-col>

          <v-col class="red lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="orange lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="yellow lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="light-green lighten-5" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col class="green lighten-4" cols="8">
            <v-list class="transparent" two-line>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="red"></v-checkbox>
                  <v-spacer></v-spacer>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">Process is in place and partially documented and approved by management</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-chip color="green" outlined pill link>
                      Strengths
                      <v-avatar class="white--text" right color="green">0</v-avatar>
                    </v-chip>
                    <v-chip color="deep-orange" outlined pill link>
                      AFI's
                      <v-avatar class="white--text" right color="deep-orange">0</v-avatar>
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  import AreasForImprovement from '@/codes/components/areas-for-improvement.vue'
  import Strengths from '@/codes/components/strengths.vue'

  export default Vue.component('ScoringMatrix', { components: { AreasForImprovement, Strengths } })
</script>
