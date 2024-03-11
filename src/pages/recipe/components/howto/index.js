import React, { useState } from 'react'
import { Box, Button,Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Purple} from '../../../../components/colors'

function InstrucoesSimples({Instrucoes}){

    return(
        <Box
        m={2}>

            <Typography 
            dangerouslySetInnerHTML={{ __html: Instrucoes }} 
            component="span" 
            variant="body1" 
            />
        </Box>
    )

}

function InstrucoesDetalhadas({Instrucoes}){

    const[Detalhar,SetDetalhar] = useState(false)

    return(
        <Box
        m={2}
        p={1}
        sx={{ 
            border: 1,
            borderColor: Purple,
            borderRadius:10,
            margin:"10px"
     }}
        >
            <Button
            // variant="outlined"
            fullWidth
            endIcon={
                Detalhar
                ? <ArrowDropUpIcon />
                : <ArrowDropDownIcon />
            }
            sx={{
                color:Purple
            }}
            onClick={() => SetDetalhar(!Detalhar)}
            >
                Instruções detalhadas
            </Button>
            {
                Detalhar
                ?   <>
                    {
                    Instrucoes[0].steps.map((instrucao) => (
                        <>
                            <DetalhadoComponent
                            Numero={instrucao.number}
                            Instrucao={instrucao.step}
                            // Ingredientes={instrucao.ingredients}
                            />
                        </>
                    ))
                    
                    }
                    </>
                : null
            }
        </Box>
    )

}

function DetalhadoComponent({Numero,Instrucao}){

    return(
        <Box
        m={1}
        >
            <Typography bold>
                Passo numero:{Numero}             
            </Typography>
            <Typography>
                {Instrucao}
            </Typography>
        </Box>
    )

}

export default function HowToFunction({Simplificado,Detalhado}){

    return(
        <Box m={2}>
            <InstrucoesSimples
            Instrucoes={Simplificado}
            />
            <InstrucoesDetalhadas
            Instrucoes={Detalhado}
            />
        </Box>
    )

}