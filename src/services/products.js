import { http } from './config'


export default {
    listar: () => {
        return http.get('products')
    },
    salvar: (resultado) => {
        return http.post('products', resultado)
    },
    deletar: (resultado) => {
        return http.delete('products/' + resultado.id)
    }

}