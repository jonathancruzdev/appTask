<template>
    <v-container>
      <v-row class="text-center">

  
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Nueva tarea
          </h1>

          <v-form>
            <v-textarea
              solo
              name="input-7-4"
              label="Descripcion de la tarea"
              v-model="taskName"
            ></v-textarea>
            <v-btn v-on:click="saveTask">Guardar</v-btn>
          </v-form>
  

        </v-col>
  
      </v-row>
    </v-container>

</template>

<script>
    export default {
        name: 'Nueva',
        data(){
            return {
                taskName: ''
            }
        },
        methods: {
          saveTask: function(){
            console.log('Save task');
            const task = {
              name: this.taskName,
              date: new Date().toLocaleDateString()
            }

            this.$emit('newTask', task);
            this.taskName = '';
            this.$router.push('pendientes');
          }
        }
    }

</script>