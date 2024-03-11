import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import NotFoundView from './notfound.json'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle,DialogContentText,Button } from '@mui/material'

//Internas
import ContainerFunction from '../../components/container'
import {Purple} from '../../components/colors'

export default function NotFoundScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: NotFoundView,
    };

    const navegacao = useNavigate()

    return(
        <ContainerFunction>
        <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
            sx={{
                border: 5,
                borderColor: Purple,
                borderRadius:10,
            }}
            >
                <Dialog
                open={true}
                >
                    <DialogTitle>Ops! Parece que essa pagina não existe</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText>
                            A pagina desejada não existe,
                            Por favor, tente ir para uma das nossas paginas
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                        color="error"
                        autoFocus
                        onClick={() => navegacao('/')}
                        variant="contained"
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
            </Box>
        </ContainerFunction>
    )

}