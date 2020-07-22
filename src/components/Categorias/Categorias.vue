<template>
   <v-container>
      <v-card color="success" >
          <v-card-title>Cadastro de categorias</v-card-title>
          <v-card-subtitle>Acompanhe as categorias</v-card-subtitle>
          <v-container>
              <v-container>
            <!-- doalog do formulário de cadastro-->       
          <v-dialog v-model="dialog"  max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Nova Categoria</v-btn>
            </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro Categoria</span>
          </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-label" v-model="dadosCategoria.nome" label="Nome"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-cellphone" v-model="dadosCategoria.descricao" label="Descrição"></v-text-field> 
                        </v-col>
                        
                    </v-row>
                </v-container>
          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text >Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="salvar">Salvar</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
          </v-container>
      <v-simple-table>
          <template>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Ações</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="categoria in categorias" :key="categoria.id">
                      <td>{{categoria.nome}}</td>
                      <td>{{categoria.descricao}}</td>
                      <td>
                          <v-btn icon color="success"  ><v-icon>mdi-pencil</v-icon></v-btn>
                          <v-btn icon color="error"   @click="apagar(categoria)"><v-icon>mdi-delete</v-icon></v-btn>
                      </td>
                  </tr>
              </tbody>
          </template>
      </v-simple-table>
  </v-container>
            
      </v-card>
      
  </v-container>
</template>

<script>
import Categories from '../../services/categories'
export default {
    data(){
        return{
            categorias: [],
            dadosCategoria: {
                id: '',
                nome: '',
                descricao: ''
            }

        }
    },
    created(){
        this.atualizarCategrias()

    },
    
    beforeUpdate(){
        this.atualizarCategrias()
        
    },
    methods: {
        atualizarCategrias(){
            Categories.listar().then(resposta => {
                this.categorias = resposta.data               

            })
        },
        salvar(){
            Categories.salvar(this.dadosCategoria)
            this.dadosCategoria = {}
            this.atualizarCategrias()
        },
        apagar(result){
            Categories.deletar(result)
            console.log(result);
            
            this.atualizarCategrias()
        }

    }

}
</script>

<style>

</style>