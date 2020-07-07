<template>
  <v-container>
      <v-card color="success" >
          <v-card-title>Cadastro de Fornecedores</v-card-title>
          <v-card-subtitle>Acompanhe seus fornecedores</v-card-subtitle>
          <v-container>
              <v-container>
            <!-- doalog do formulário de cadastro-->       
          <v-dialog v-model="dialog"  max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Novo Fornecedor</v-btn>
            </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro Fornecedor</span>
          </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-label" v-model="dadosFornecedor.name" label="Nome"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-cellphone" v-model="dadosFornecedor.contact" label="Preço"></v-text-field> 
                        </v-col>
                        
                    </v-row>
                </v-container>
          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text >Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="salvar()">Salvar</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
          </v-container>
      <v-simple-table>
          <template>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Contato</th>
                      <th>Ações</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="fornecedor in listFornecedor" :key="fornecedor.id">
                      <td>{{fornecedor.attributes.name}}</td>
                      <td>{{fornecedor.attributes.contact}}</td>
                      <td>
                          <v-btn icon color="success" @click="editar(fornecedor)" ><v-icon>mdi-pencil</v-icon></v-btn>
                          <v-btn icon color="error"   @click="apagar(fornecedor)"><v-icon>mdi-delete</v-icon></v-btn>
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
import Providers from '../../../services/providers'
export default {


    data(){
        return{
            dialog: false,
            cabecalho: [
                {text: 'Nome', value: 'attributes.name'},
                {text: 'Contato', value: 'attributes.contact'},
                {text: 'Ações', value: 'actions'}
            ],
            dadosIndex: -1,
            dadosFornecedor: {
                id: '',
                name: '',
                contact: ''
            },
            

            listFornecedor: [

            ]
        }
    },

    created(){
        this.atualizaDados()
    },
    beforeUpdate(){
        this.atualizaDados()
        this.close
    },

    methods: {
        atualizaDados(){
            Providers.listar().then(resposta => {
                this.listFornecedor = resposta.data.data
            })
        },

        salvar(){
            Providers.salvar(this.dadosFornecedor)
            this.dadosFornecedor = {}
            this.atualizaDados()
            
            
        },

        editar(fornecedor){ 
            this.dadosFornecedor = fornecedor
            this.atualizaDados()
        },

        apagar(fornecedor){
            Providers.deletar(fornecedor)
            this.atualizaDados()
        },
        close(){
            this.dialog.close
        }
    }

}
</script>

<style>

</style>