import React from 'react'
import Lottie from 'react-lottie';
import { Box } from '@mui/material'
import Loading from './loading_food.json'

export default function LoadingFunction({}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loading,
    };

    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        m={2}
        >
                <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )

}