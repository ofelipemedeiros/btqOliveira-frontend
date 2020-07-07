<template>
<div>
    <v-simple-table>
        <template v-slot:top>
            
      <v-toolbar flat color="white">
          <v-toolbar-title>Detalhamento de produtos</v-toolbar-title>
          <v-divider
          class="mx-4"
          inset
          vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <!--Inicio da caixinha de dialog-->
          <v-dialog max-width="500px">
              <template>
                  <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
              </template>
              <!-- Início do carde com os objetos para o banco-->
              <v-card>
                  <v-card-title>
                    <span class="headline">titulo form</span>
                  </v-card-title>

                  <v-card-text>
                      <v-container>
                          <v-row>
                              <v-col>
                                  <v-text-field></v-text-field>
                              </v-col>
                          </v-row>
                      </v-container>
                  </v-card-text>

              </v-card>
          </v-dialog>




      </v-toolbar>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in produtos" :key="item.id">
                    <td>{{item.attributes.name}}</td>
                    <td>{{item.attributes.description}}</td>
                    <td>{{item.attributes.price}}</td>
                </tr>
            </tbody>

        </template>
    </v-simple-table>
</div>
</template>
<script>

import Produto from '../../../services/products'


export default {

    data() {
        return {
        produtos: [],       
        }
    },

    mounted(){
        Produto.listar().then( resposta => {
            this.produtos = resposta.data.data
            console.log(this.produtos);
            
                     
        })
        
    }

}
</script>

<style>


</style>