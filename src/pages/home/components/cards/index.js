import React from 'react'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Tooltip, Typography } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import { useNavigate } from "react-router-dom";

function IconesFunction({Icone,Status,Nome}){

    return(
        <Box
        m={2}
        >
            <Tooltip arrow placement="top" title={Nome}>
                <Icone 
                sx={{
                    width:
                    window.innerWidth > 420
                        ?'30%'
                        : '40%', 
                    height: 
                    window.innerWidth > 420
                    ?'30%'
                    : '40%', 
                    color:
                    Status
                    ? '#0ff000'
                    : '#ff0000'
                }}
                />
            </Tooltip>
        </Box>
    )

}

export default function CardsFunction({Titulo,Imagem,Sumario,Vegano,Vegetariano,GlutenFree,ID}){

    const navegacao = useNavigate();

    return(
        <Card
        onClick={() => navegacao(`/recipe/${ID}`)}
        >
            <CardHeader
                title={Titulo}
            />
            <CardMedia
                component="img"
                height={
                    window.innerWidth > 420
                    ?'90%'
                    : '100%' 
                }
                image={Imagem}
                alt={Titulo}
            />
            <CardContent>
                <Typography 
                dangerouslySetInnerHTML={{ __html: Sumario }} 
                component="span" 
                variant="body1" 
                />
            </CardContent>
            <CardActions disableSpacing>
                    <IconesFunction
                    Icone={SpaIcon}
                    Status={Vegetariano}
                    Nome="Vegetariano"
                    />
                    <IconesFunction
                    Icone={EnergySavingsLeafIcon}
                    Status={Vegano}
                    Nome="Vegano"
                    />
                    <IconesFunction
                    Icone={BreakfastDiningIcon}
                    Status={GlutenFree}
                    Nome="Gluten Free"
                    />
            </CardActions>
        </Card>
    )

}