<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="../assets/tasks.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Mi Aplicación de Tareas
        </h1>

        <p class="subheading font-weight-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.

        </p>

        <router-link to="/about">Nosotros</router-link>
        <router-link to="/pendientes">Tareas Pendientes</router-link>
        <router-link to="/completadas">Tareas Completadas</router-link>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>
