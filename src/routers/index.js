import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Produtos from '../components/pages/produtos/Prod'
import Dash from '../components/pages/dash/Dash'
import Fornecedores from '../components/pages/fornecedores/Providers'
import Categorias from '../components/Categorias/Categorias'

const routes = [
    {
        component: Produtos,
        name: "produtos",
        path: "/produtos"
    },
    {
        component: Dash,
        name: "dash",
        path: "/Dash"
    },
    {
        component: Fornecedores,
        name: "fornecedores",
        path: "/Fornecedores"
    },
    {
        component: Categorias,
        name: "categorias",
        path: "/Categorias"
    }
];

export default new VueRouter({
    routes
})