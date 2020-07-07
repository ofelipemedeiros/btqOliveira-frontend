<template>
  <v-app>
    <v-navigation-drawer app width=250
    permanent
    
     >
      <NavigationDrawer/>
    </v-navigation-drawer>

    <v-app-bar app>
       

    </v-app-bar>

    <v-content>
      <v-container fluid>
        
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app >
      footer

    </v-footer>

  </v-app>
</template>

<script>

import Produtos from './components/pages/produtos/Produtos'
import Dash from './components/pages/dash/Dash'
import MenuLateral from './components/pages/menu-lateral/MenuLateral'
import NavigationDrawer from './components/pages/menu-lateral/NavigationDrawer'
import ToolBar from './components/pages/BarraFerramentas/ToolBar'



export default {
  name: 'App',

  components: {
    Produtos,
    Dash,
    NavigationDrawer,
    ToolBar
    
  },

  data: () => ({
    //
  }),
};
</script>
