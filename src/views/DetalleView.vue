<template>
    <v-container>
      <v-row class="text-center">

  
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Tarea Detalle
            <span>{{ this.$route.params.id }}</span>
          </h1>
          
          <v-form>
            <v-textarea
              solo
              name="input-7-4"
              label="Descripcion de la tarea"
              v-model="name"
            ></v-textarea>
            <v-btn v-on:click="saveTask" color="primary" >Guardar</v-btn>
            <v-btn class="ml-2" color="error" v-on:click="deleteTask">Eliminar</v-btn>

          </v-form>

        </v-col>
  
      </v-row>
    </v-container>

</template>

<script>
    export default {
        name: 'Detalle',
        created(){
          this.index = this.$route.params.id;
          const data = JSON.parse( localStorage.getItem('tasks') );
          const task = data ? data[this.index] : {};

          this.name = task.name ? task.name : '';
          this.date = task.date ? task.date : '';
        },
        data(){
            return {
                index:0,
                name: '',
                date: ''
            }
        },
        methods: {
          saveTask: function(){
            const task = {
              name: this.name,
              date: new Date().toLocaleDateString(),
              index: this.index
            }

            this.$emit('saveTask', task);
            this.taskName = '';
            this.$router.push('/pendientes');
          },
          deleteTask: function(){
            this.$emit('deleteTask', this.index);
            this.$router.push('/pendientes');

          }

        }

    }

</script>