import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle';

import ContainerFunction from '../../components/container'
import CardFunction from './components/cards'
import FiltroFunction from './components/filters'
import EmptyFunction from '../recipefinder/components/empty'
import LoadingScreen from '../../components/container/components/loading'
import {Purple} from '../../components/colors'

import RequiscaoInicial from './requests/init'


export default function HomeScreen(){

    const[Loading,SetLoading] = useState(true)

    const[LoadingSpecial,SetLoadingSpecial] = useState(false)

    const[Status,SetStatus] = useState(200)

    const[DataReceita,SetDataReceita] = useState(null)

    const[Filtro,SetFiltro] = useState([])

    useEffect(() => {
        RequiscaoInicial(SetLoading,SetStatus,SetDataReceita)
    },[])

    return(
        <ContainerFunction
        Loading={Loading}
        Status={Status}
        >
            <Box
            flexWrap= "wrap"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <FiltroFunction
                Filtro={Filtro}
                SetFiltro={SetFiltro}
                Desabilitar={LoadingSpecial}
                />
                <Box>
                <IconButton
                onClick={() => RequiscaoInicial(SetLoadingSpecial,SetStatus,SetDataReceita,Filtro.join(","))}
                disabled={LoadingSpecial}
                >
                    <ShuffleIcon
                    style={{
                        color:Purple
                    }}
                    />
                </IconButton>
            </Box>
            </Box>
            {
                LoadingSpecial
                ? <LoadingScreen/>
                :   <>
                {
                    DataReceita !== null
                    ?   <>
                            {
                            DataReceita.recipes.map((receita) => (
                                <>
                                    <CardFunction
                                    GlutenFree={receita.glutenFree}
                                    Imagem={receita.image}
                                    Sumario={receita.summary}
                                    Titulo={receita.title}
                                    Vegano={receita.vegan}
                                    Vegetariano={receita.vegetarian}
                                    ID={receita.id}
                                    />
                                </>
                            ))
                        }
                        </>
                        : <EmptyFunction/>
                }
                    </>
            }
            
            
        </ContainerFunction>
    )

}