import React from 'react'
import Lottie from 'react-lottie';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Error from './error.json'

export default function ErrorScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Error,
      };

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        sx={{
            border: 5,
            borderColor: '#0000ff',
            borderRadius:10,
        }}
        >
            <Dialog
            open={true}
            >
                <DialogTitle>Parece que voce encontrou um bug</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Parece ter ocorrido um erro na sua solicitação,
                        Por favor relate ela ao desenvolvedor da plataforma
                    </DialogContentText>
                    
                </DialogContent>
            </Dialog>
            <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )
}