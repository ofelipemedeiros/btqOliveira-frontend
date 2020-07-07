<template>
  <div class="card-dashboard">
  
  <Dashboard titulo="Produtos" :subtitulo="qtdProdutos" />
  <Dashboard titulo="Fornecedor" :subtitulo="qtdFornecedores"/>
  <Dashboard titulo="Vendas" subtitulo="12900"/>

  </div>
</template>

<script>

import Fornecedor from '../../../services/providers'
import Produtos from '../../../services/products'
import Dashboard from '../../DashBoard'
export default {

    components: {
        Dashboard
    },
    data(){
        return{
            Produtos: [],
            Fornecedores: [],
            qtdProdutos: '',
            qtdFornecedores: '',
        }
    },

    created(){
        this.listarProdutos()
        this.listarFornecedores()
    },

    methods: {
        listarProdutos(){
            Produtos.listar().then(resposta => {
                this.produtos = resposta.data.data
                this.qtdProdutos=this.produtos.length

            })
        },
        listarFornecedores(){
            Fornecedor.listar().then(resposta => {
                this.Fornecedores = resposta.data.data
                this.qtdFornecedores = this.Fornecedores.length
                
            })
        }

    }

}
</script>

<style>
.card-dashboard{
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 100px;
    max-width: 700px;
    
}

</style>