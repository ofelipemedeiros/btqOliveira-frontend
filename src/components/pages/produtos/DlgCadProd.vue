<template>

  <v-row justify="center">
    <v-dialog >
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Novo Produto</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro produtos</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              
            </v-container>
          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      dialog: false
    }
  }

}
</script>

<style>

</style>