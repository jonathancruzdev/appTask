<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon>mdi-home</v-icon>


        </router-link>



        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text
        to="/pendientes">
        <span class="mr-2">Pendientes</span>
        <v-icon>mdi-clock</v-icon>
      </v-btn>

      <v-btn text
        to="/completadas">
        <span class="mr-2">Completadas</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>

      <v-btn text
        to="/nueva">
        <span class="mr-2">Nueva</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>


      <v-btn
        to="/about"
        text
      >
        <span class="mr-2">Nuestra App</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
