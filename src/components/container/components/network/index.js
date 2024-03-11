import React from 'react'
import Lottie from 'react-lottie';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Network from './network.json'

export default function NetworkScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Network,
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
                <DialogTitle>Parece ter ocorrido um problema de conexão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                            Parece que voce esta tendo problemas com a sua conexão,
                            Por favor, vá pegar uma agua e tente novamente mais tarde
                        </DialogContentText>
                </DialogContent>
            </Dialog>
            <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )

}