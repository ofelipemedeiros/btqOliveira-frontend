<template>
<v-container>
    <v-card color="success" >
        <v-card-title >Cadastro de produtos</v-card-title>
        <v-card-subtitle>Registre seus produtos</v-card-subtitle>
        <v-container>
            <!-- doalog do formulário de cadastro-->       
          <v-dialog v-model="dialog"  max-width="620px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Novo Produto</v-btn>
            </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro produtos</span>
          </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-label" label="Nome"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-cash-usd" label="Preço"></v-text-field> 
                        </v-col>
                        
                        <v-col cols="12" sm="6" md="4">
                        <v-menu 
                        ref="menu" 
                        v-model="menu" 
                        :close-on-content-click="false" :return-value.sync="date" 
                        transition="scale-transition" offset-y
                        min-width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field 
                            prepend-inner-icon="mdi-calendar" 
                            v-model="date" 
                            label="Data de Cadastro" 
                            v-bind="attrs"
                            v-on="on">
                            </v-text-field> 
                        </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                            </v-menu>
                        </v-col>
                        
                         <v-col cols="12" sm="6" md="4">
                            <v-text-field prepend-inner-icon="mdi-square-root-box" label="Quantidade mínima"></v-text-field> 
                        </v-col>
                         
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                            :items="dadosFornecedor.name"
                            label="Fornecedor"
                            prepend-inner-icon="mdi-account-tie"
                            >

                            </v-select>
                        </v-col>
                        <v-row>
                        <v-col >
                            <v-textarea  rows="2" prepend-inner-icon="mdi-comment" label="Descrição" ></v-textarea>
                        </v-col>
                        </v-row>
                    </v-row>
                </v-container>
          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click=" dialog = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text >Salvar</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
          </v-container>
          <!--tabela simples mostrando dados-->
            <v-container>
            <v-simple-table>
                <template>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Data de entrada</th>
                            <th>Fornecedor</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="produto in dadosProdutos" :key="produto.id">
                            <td>{{produto.attributes.name}}</td>
                            <td>{{produto.attributes.price}}</td>
                            <td>{{produto.attributes.entryDate}}</td>
                            <td>{{produto.attributes.minimumQuantity}}</td>
                            <td>{{produto.attributes.departureDate}}</td>
                            <td>{{produto.attributes.provider}}</td>
                            <td>
                                <v-btn icon color="success"  ><v-icon>mdi-pencil</v-icon></v-btn>
                          <v-btn icon color="error" @click="apagar(produto)" ><v-icon>mdi-delete</v-icon></v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-container>
        <!--tabela simples mostrando dados-->        
    </v-card>
    </v-container>  
</template>


<script>
import Produtos from '../../../services/products'
import Fornecedor from '../../../services/providers'
export default {

    data(){
        return{
            dialog: false,
            date: new Date().toISOString().substr(0, 10),
            dadosProdutos: [],
            nomesFornecedor: [],
            dadosFornecedor: {
                name: '',
                contact: ''
            },
        }
    },
    created(){
        
        this.listarFornecedor()
        
    },
    beforeUpdate(){
        this.listData()
    },

    methods:{
        listData(){
            Produtos.listar().then(resposta =>{
                this.dadosProdutos = resposta.data.data
            })

        },
        listarFornecedor(){
            Fornecedor.listar().then(resposta => {
                this.dadosFornecedor = resposta.data.data                         
            })
        },
        apagar(produto){
            Produtos.deletar(produto)
            this.listData()
        }

    }

}
</script>

<style>

</style>