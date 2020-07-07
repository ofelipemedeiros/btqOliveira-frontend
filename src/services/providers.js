import { http } from './config'

 export default {
     listar: () => {
         return http.get('provider')

     },
     salvar: (resultado) => {
         return http.post('provider', resultado)
     },
     editar: (resultado) => {
         return http.patch('provider', resultado)

     },

     deletar: (resultado) => {
         return http.delete('provider/' + resultado.id)

     }
 }