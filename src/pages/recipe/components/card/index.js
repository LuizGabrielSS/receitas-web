import { Avatar, Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

function DataComponent({Icone,Status,Nome}){

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
                        : '300%', 
                    height: 
                    window.innerWidth > 420
                    ?'30%'
                    : '300%', 
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

function ComplexComponent({Icone,Valor,Nome}){

    return(
        <Box
        m={2}
        >
            <Tooltip arrow placement="top" title={Nome}>
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                m={1}
                >
                    <Icone 
                sx={{
                    width:
                    window.innerWidth > 420
                        ?'10%'
                        : '50%', 
                    height: 
                    window.innerWidth > 420
                    ?'10%'
                    : '50%', 
                    color:"#000"
                }}
                />
                <Typography
                        variant={
                            window.innerWidth > 420
                            ?"subtitle2"
                            :"body1"
                        }
                        sx={{
                            color:"#000"
                        }}
                        >
                        :{Valor}
                    </Typography>
                </Box>
                
            </Tooltip>
        </Box>
    )

}

export default function CardReceita({Titulo,Imagem,Tempo,Serve,Vegetariano,Vegano,Gluten}){

    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={2}
        >
            <Box
            sx={{
                width: '40%', height: '40%'
            }}
            >
                <Avatar
                variant="square"
                src={Imagem}
                alt={Titulo}
                sx={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Box
            m={1}
            sx={{
                width: '50%', height: '50%'
            }}
            flexWrap= "wrap"
            >
                <Typography 
                paragraph
                display="block"
                variant={
                    window.innerWidth > 420
                    ? "h6"
                    : "body1"
                }>
                    {Titulo.toUpperCase()}
                </Typography>
                <Box 
                m={2}
                >
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <ComplexComponent
                        Icone={AccessTimeIcon}
                        Nome="Tempo"
                        Valor={`${Tempo}min`}
                        />
                        <ComplexComponent
                        Icone={PeopleIcon}
                        Nome="Serve"
                        Valor={Serve}
                        />
                    </Box>
                </Box>
                <Box 
                m={2}
                >
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <DataComponent
                        Icone={SpaIcon}
                        Status={Vegetariano}
                        Nome="Vegetariano"
                        />
                        <DataComponent
                        Icone={EnergySavingsLeafIcon}
                        Status={Vegano}
                        Nome="Vegano"
                        />
                        <DataComponent
                        Icone={BreakfastDiningIcon}
                        Status={Gluten}
                        Nome="Gluten Free"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}