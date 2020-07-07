<v-container>
      <v-card color="success">
          <v-card-title>Produtos</v-card-title>
          <v-card-subtitle>Acompanhe seus Produtos</v-card-subtitle>
          <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field prepend-inner-icon="mdi-label" outlined solo flat dense label="Nome"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-cash-usd" outlined solo flat dense label="Preço"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-calendar" outlined solo flat dense label="Data de cadastro"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-square-root-box" outlined solo flat dense label="Quantidade mínima"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-calendar" outlined solo flat dense label="Data de saída"></v-text-field>
                        <v-select prepend-inner-icon="mdi-account-tie" dense solo label="Fornecedor"></v-select>
                        <v-textarea  rows="2" prepend-inner-icon="mdi-comment" label="Descrição" solo></v-textarea>
                    </v-col>
                    <template>
                    <v-row justify="center" align="center">
                        <v-chip 
                        class="ma-2"
                        pill
                        color="blue"
                        text-color="white">
                        <v-icon left>mdi-content-save</v-icon>
                        Cadastrar</v-chip>

                        <v-chip 
                        class="ma-2"
                        pill
                        color="red"
                        text-color="white">
                        <v-icon left>mdi-delete</v-icon>
                        Cancelar</v-chip>
                    </v-row>
                </template>
                </v-row>
                
            </v-container>
        </v-form>
      </v-card>
  </v-container>



  <v-form>
          <v-container>
          <v-row>
          <v-col cols="4" md="3">
            <v-text-field prepend-inner-icon="mdi-label" v-model="dadosFornecedor.name" outlined solo flat dense label="nome"></v-text-field>
            </v-col>
            <v-col cols="4" md="3">
            <v-text-field prepend-inner-icon="mdi-cellphone" v-model="dadosFornecedor.contact" outlined solo flat dense label="Contato"></v-text-field>
            </v-col>
            </v-row>
            <v-btn 
            color="success" 
            @click="salvar()"
            ><v-icon>mdi-content-save</v-icon>
            Salvar</v-btn>
            </v-container>        
            </v-form>


            * C reate
            * R eade
            - U pdate
            * D elete
