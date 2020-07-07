<template>
  <v-data-table
  :headers="cabecalho"
  :items="dadosProduto"
  >
  
      <template v-slot:top>
          <v-toolbar flat color="white">
              <v-toolbar-title>Detalhamento de produtos</v-toolbar-title>
              <v-divider
              class="mx-4"
              isent
              vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <!--Inicio da caixinha de dialog-->
          <v-dialog v-model="dialog" max-width="700px">
              <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">Novo Produto</v-btn>
              </template>
              <!-- Início do carde com os objetos para o banco-->
              <v-card>
                  <v-card-title>
                      
                  </v-card-title>

                  <v-card-text>
                      <v-container>
                          <v-row>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.description" label="Descrição"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.price" label="Preço"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.entryDate" label="Data Cadastro"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.minimumQuantity" label="Quantidade Minima"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.departureDate" label="Data de saida"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedItem.provider" label="Fornecedor"></v-text-field>
                              </v-col>
                          </v-row>
                      </v-container>
                  </v-card-text>

                  <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                          <v-btn color="blue darken-1" text @click="salvar">Salvar</v-btn>
                  </v-card-actions>


              </v-card>
          </v-dialog>
          </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
          <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
          >mdi-pencil</v-icon>

          <v-icon
          small
          > mdi-delete</v-icon>
      </template>
  </v-data-table>
</template>

<script>
import Produtos from '../../../services/products'
export default {

    data() {
        return {
            dialog: false,
            cabecalho: [
                {text: 'Nome', value: 'attributes.name'},
                {text: 'Descrição', value: 'attributes.description'},
                {text: 'Preço', value: 'attributes.price'},
                {text: 'Data de cadastro', value: 'attributes.entryDate'},
                {text: 'Quantidade mínima', value: 'attributes.minimumQuantity'},
                {text: 'Data de saida', value: 'attributes.departureDate'},
                {text: 'Fornecedor', value: 'attributes.provider'},
                {text: 'Ações', value: 'actions'}
            ],
            dadosProduto: [],
            editedItem: {
                name: '',
                description: '',
                price: '',
                entryDate: '',
                minimumQuantity: '' ,
                departureDate: '',
                provider: ''



            }
        }
    },
    created(){
        this.inicializarProdutos()

    },

    methods: {
        inicializarProdutos(){
            Produtos.listar().then(resposta => {
                this.dadosProduto = resposta.data.data
            })

        },
        editItem(item){
            console.log('editandoproduto');
            

        },
        close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      salvar(){
          Produtos.salvar(this.editedItem)
          this.close()
          this.inicializarProdutos()
      }
    }

}
</script>

<style>

</style>