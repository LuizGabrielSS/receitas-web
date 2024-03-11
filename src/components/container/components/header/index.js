import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import {Purple} from '../../../colors'

function ButtonsNavigation({Local,Nome}){

    const localizacao = useLocation();

    const navegacao = useNavigate()

    return(
        <Box
            mx={1}
            style={{
                // position: 'fixed',
                right: '20px',
                bgColor:"#fff",
                borderRadius:5,
              }}
            >
                <Button 
                color="inherit"
                onClick={() => navegacao(Local)}
                variant={
                    Local === localizacao
                    ? "contained"
                    : "outlined"
                }
                >
                    {Nome}
                </Button>
            </Box>
    )

}

export default function Header(){
    return(
        <Box
        sx={{display:'flex'}}
        >
            <AppBar 
            position="fixed" 
            open={false} 
            sx={{
                backgroundColor:Purple
            }}
            >
            <Toolbar>
            <Typography variant="h6" placement="center" noWrap component="div">
                Receitas
            </Typography>
            <Box
            display="flex"
            style={{
                position: 'fixed',
                right: '20px',
              }}
            >
            <ButtonsNavigation
            Nome="Home"
            Local='/'
            />
            <ButtonsNavigation
            Nome="Finder"
            Local='/finder'
            />
            </Box>
            </Toolbar>
            </AppBar>
        </Box>
    )

}