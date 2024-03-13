import api from '../../../services/api'

export default function RequiscaoInicial(SetLoading,SetStatus,SetDataReceita,Filtro=""){

    SetLoading(true)

    const params = {
        "apiKey":process.env.REACT_APP_API_KEY,
        "number":'10',
        "include-tags":Filtro
    }

    api.get('random',{
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