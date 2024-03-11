import React, { useState } from 'react'

import ContainerFunction from '../../components/container'
import SearchFunction from '../../components/search'
import CardReceita from './components/cards'
import EmptyFunction from './components/empty'
import LoadingComponent from './components/loading'

import RequisicaoSearch from './requests/init'

export default function RecipeFinderScreen(){

    const[Loading,SetLoading] = useState(false)

    const[Status,SetStatus] = useState(200)

    const[DataReceitas,SetDataReceitas] = useState([])

    const[InputSearch,SetInputSearch] = useState("")

    return(
        <ContainerFunction
        Status={Status}
        >
            <SearchFunction
            Informacao={InputSearch}
            Pesquisar={() => RequisicaoSearch(InputSearch,SetLoading,SetStatus,SetDataReceitas)}
            SetInformacao={SetInputSearch}
            PlaceHolder="Insira os ingredientes"
            />
            {
                Loading
                ? <LoadingComponent/>
                :   <>
                    {
                DataReceitas.length === 0
                ? <EmptyFunction/>
                :   <>
                    {
                        DataReceitas.map((receita) =>(
                            <>
                            <CardReceita
                            titulo={receita.title}
                            imagem={receita.image}
                            usados={receita.usedIngredients}
                            naousados={receita.unusedIngredients}
                            falta={receita.missedIngredients}
                            id={receita.id}
                            />
                            </>
                        ))
                    }
                    </>
                    }
                    </>
            }
            
        </ContainerFunction>
    )

}