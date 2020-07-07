<template>
  <div class="ma-24 pa-24">
      <template>
          <v-card>
              <!-- menu esquerdo-->
             
                  <!--avatar-->
                  <v-list>
                      <v-list-item>
                          <v-list-item-avatar>
                              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                          </v-list-item-avatar>
                      </v-list-item>
                  </v-list>
                  <!--avatar-->

                  <!--informações login-->
                  <v-list-item>
                      <v-list-item-content>
                          <v-list-item-title>Felipe Medeiros</v-list-item-title>
                          <v-list-item-subtitle>ofelipemedeiros@hotmail.com</v-list-item-subtitle>
                      </v-list-item-content>
                  </v-list-item>
                  <!--Informações login-->

                  <v-divider></v-divider>
                  <!-- Lista de menu-->
                  <v-list>
                      <!--Cada item de menu é formado por 3 elementos: item, icon, title-->
                      <v-list-item to="/dash">
                          <v-list-icon>
                              <v-icon>mdi-view-dashboard</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>DashBoard</v-list-icon-title>
                      </v-list-item>
                      <v-list-item to="/produtos">
                          <v-list-icon>
                              <v-icon>mdi-barcode</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Produtos</v-list-icon-title>
                      </v-list-item>
                      <!--1 item do menu-->
                      <v-list-item>
                          <v-list-icon>
                              <v-icon>mdi-account-group</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Clientes</v-list-icon-title>
                      </v-list-item>
                      <v-list-item>
                          <v-list-icon>
                              <v-icon>mdi-cash-multiple</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Vendas</v-list-icon-title>
                      </v-list-item>
                      <v-list-item>
                          <v-list-icon>
                              <v-icon>mdi-store</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Compras</v-list-icon-title>
                      </v-list-item>
                      <v-list-item to="/categorias">
                          <v-list-icon>
                              <v-icon>mdi-dna</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Categorias</v-list-icon-title>
                      </v-list-item>
                      <v-list-item to="/fornecedores">
                          <v-list-icon>
                              <v-icon>mdi-dna</v-icon>
                          </v-list-icon>
                          <v-list-icon-title>Fornecedores</v-list-icon-title>
                      </v-list-item>


                  </v-list>

              
          </v-card>
      </template>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>