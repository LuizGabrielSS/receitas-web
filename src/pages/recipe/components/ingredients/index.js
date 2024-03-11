import React from 'react'
import { Box, Typography } from '@mui/material'

import {Purple} from '../../../../components/colors'

function IngredienteComponent({Nome,Quantidade}){

    return(
        <Box
        m={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        
        >
            <Typography 
            variant={
                window.innerWidth > 420
                ?"subtitle2"
                :"body2"
            }
            >
                - {Nome}
            </Typography>
            <Typography
            variant={
                window.innerWidth > 420
                ? "h6"
                :"subtitle2"
            }
            >
                ({Quantidade})
            </Typography>
        </Box>
    )

}

export default function Ingredientes({Ingredientes}){

    return(
        <Box
        p={2}
        sx={{ 
            border: 1,
            borderColor: Purple,
            borderRadius:10,
            margin:"10px"
     }}
        >
            <Typography
            variant={
                window.innerWidth > 420
                ? "h6"
                : "subtitle2"
            }
            >
                Ingredientes:
            </Typography>
            {
                Ingredientes.map((ingrediente) => (
                    <>
                        <IngredienteComponent
                        Nome={ingrediente.original}
                        Quantidade={ingrediente.amount}
                        />
                    </>
                ))
            }
        </Box>
    )

}