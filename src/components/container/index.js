//Externas
import React from 'react'
import {Container,Box} from '@mui/material'

//Internas
import LoadingScreen from './components/loading'
import ErrorScreen from './components/error'
import NetworkScreen from './components/network'
import Header from './components/header'

const status_ok = [200,204]

export default function ContainerFunction({Loading=false,Status=200,children}){

    return(
        <Container>
            {
                Loading
                ? <LoadingScreen/>
                :   <>
                        {
                        Status === 200
                        ? 
                        <>
                        <Header/>
                        <Box
                        my={9}
                        >
                          {children}
                        </Box>
                        </>
                        :   <>
                                {
                                    Status.toLowerCase() === "network"
                                    ? <NetworkScreen/>
                                    : <ErrorScreen/>
                                }
                            </>
                        }
                    </>
            }
        </Container>
    )

}