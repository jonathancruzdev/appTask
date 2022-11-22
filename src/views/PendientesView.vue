<template>
    <v-container>
      <v-row class="text-center">

  
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Tareas Pendientes
          </h1>
  
          <v-card
            class="mx-auto"
            min-width="400"
            tile
          >
            <v-list dense>
              <v-list-item-group
                color="primary"
                v-for="(task, index) in tasks"
                v-bind:key="index"
              >
                <v-list-item

                >
                  <v-list-item-icon>
                    <v-icon > mdi-clock </v-icon>
                    <span v-text="task.date"></span>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="task.name" ></v-list-item-title>
                  </v-list-item-content>
                  <v-btn v-bind:to="'/detalle/'+index"> <v-icon>mdi-check</v-icon>  </v-btn>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>

        </v-col>
  
      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'Pendientes',
      props:['tasks'],
      data: () => ({
  
      }),
    }
  </script>
  