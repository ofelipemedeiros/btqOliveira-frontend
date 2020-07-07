<template>
  <v-card>
        <v-list shaped>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
            flat
            v-for="(item,i) in items"
            :key="i"
            >

              <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>

              </v-list-item-content>

            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
</template>

<script>
export default {

    data( ){
        return {
            item: 1,
            items: [
                {text: 'Hora', icon: 'mdi-clock'},
                {text: 'Conta', icon: 'mdi-account'},
                {text: 'Bandeira', icon: 'mdi-flag'},
                {text: 'Hora', icon: 'mdi-clock'},
                {text: 'Conta', icon: 'mdi-account'},
                {text: 'Bandeira', icon: 'mdi-flag'}
            ]
        }
    }

}
</script>

<style>

</style>