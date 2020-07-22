import { http } from './config'


export default {
    listar: () => {
        return http.get('categories')
    },
    salvar: (resultado) => {
        return http.post('categories', resultado)
    },
    deletar: (resultado) => {
        return http.delete('categories/' + resultado.idcategoria)
    }

}