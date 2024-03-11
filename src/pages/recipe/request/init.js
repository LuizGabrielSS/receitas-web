import api from '../../../services/api'

export default function RequisicaoInicial(SetLoading,SetStatus,SetDataReceita,id){

    const params = {
        "apiKey":process.env.REACT_APP_API_KEY,
    }

    api.get(`${id}/information`,{
        params:params
    }).then((res) => (
        SetDataReceita(res.data),
        SetStatus(res.status)
    ))
    .catch((error) => {
        SetStatus(error.status)
    })

    SetLoading(false)

}