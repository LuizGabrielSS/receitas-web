import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {Purple} from '../colors'

export default function SearchFunction({Informacao,SetInformacao,PlaceHolder,Pesquisar}){

    return(
        <Box
        m={2}
        >
            <TextField
            color="secondary"
            label={PlaceHolder}
            defaultValue={Informacao}
            onChange={(value) => SetInformacao(value.target.value)}
            fullWidth
            InputProps={{
                endAdornment:(
                    <Button 
                        sx={{
                            color:Purple
                        }}
                        onClick={() => Pesquisar()} 
                        endIcon={
                            <SearchIcon 
                            sx={{
                                color:Purple
                            }}/>}>
                        Pesquisar
                    </Button>
                )
            }}
            sx={{
                color:Purple
            }}
            />
        </Box>
    )

}