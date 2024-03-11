import api from '../../../services/api'

export default function RequisicaoSearch(InputSearch,SetLoading,SetStatus,SetData){

    SetLoading(true)

    const params = {
        "ingredients":InputSearch,
        "apiKey":process.env.REACT_APP_API_KEY,
    }

    api.get('findByIngredients',{
        params:params
    }).then((res) => (
        SetData(res.data),
        SetStatus(res.status)
    ))
    .catch((error) => {
        SetStatus(error.status)
    })

    SetLoading(false)

}