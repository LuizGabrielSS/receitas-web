import React from 'react'
import Lottie from 'react-lottie';
import { Box } from '@mui/material'
import EmptyView from './empty.json'

export default function EmptyFunction({}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: EmptyView,
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