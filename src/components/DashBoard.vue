<template>
<div class="card-template">
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="#4DB6AC"
    hover="true"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle>{{Titulo}}</v-list-item-subtitle>
        <v-list-item-title>{{Subtitulo}}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
      <v-icon color="blue darken-2">mdi-home</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
  </div>
</template>

<script>

export default {
  props:{
    Titulo: String,
    Subtitulo: Number


  }

}
</script>

<style>


</style>