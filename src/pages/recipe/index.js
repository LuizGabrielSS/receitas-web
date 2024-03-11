import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import ContainerFunction from '../../components/container'
import CardReceita from './components/card';
import IngredientesFunction from './components/ingredients'
import HowToFunction from './components/howto'

import RequisicaoInicial from './request/init';

export default function ReceitaScreen(){

    const[Loading,SetLoading] = useState(true)

    const[Status,SetStatus] = useState(200)

    const[DataReceita,SetDataReceita] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        RequisicaoInicial(SetLoading,SetStatus,SetDataReceita,id)
    },[])

    return(
        <ContainerFunction
        Loading={Loading}
        Status={Status}
        >
            {
                DataReceita === null
                ? null
                : 
                <>
                <CardReceita
                    Gluten={DataReceita.glutenFree}
                    Imagem={DataReceita.image}
                    Serve={DataReceita.servings}
                    Tempo={DataReceita.readyInMinutes}
                    Titulo={DataReceita.title}
                    Vegano={DataReceita.vegan}
                    Vegetariano={DataReceita.vegetarian}
                />
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <HowToFunction
                    Simplificado={DataReceita.instructions}
                    Detalhado={DataReceita.analyzedInstructions}
                    />
                    <IngredientesFunction
                    Ingredientes={DataReceita.extendedIngredients}
                    />
                </Box>
                </>
            }
        </ContainerFunction>
    )
}