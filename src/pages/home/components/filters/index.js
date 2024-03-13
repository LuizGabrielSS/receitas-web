import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import { Purple } from '../../../../components/colors'

function ChexkBoxFunction({PlaceHolder,Modificar,value,Checked,Desabilitar}){

    return(
        <FormControlLabel
        label={PlaceHolder}
        disabled={Desabilitar}
        control={
            <Checkbox
            onChangeCapture={() => Modificar(value)}
            checked={Checked}
            style={{
                color:Purple
            }}
            />
        }
        />
    )

}

export default function FilterFunction({Filtro,SetFiltro,Desabilitar}){

    function Modificar(value){
        const array = Filtro
        const index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1);
        } else {
            array.push(value);
        }
        console.log(array)
        SetFiltro(array)
    }

    return(
        <Box
        m={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
            <FormGroup
            style={{
                flexWrap:"wrap"
            }}
            >
                <ChexkBoxFunction
                PlaceHolder="Vegetariano"
                Modificar={Modificar}
                value="vegetarian"
                Checked={Filtro.includes("vegetarian")}
                Desabilitar={Desabilitar}
                />
                <ChexkBoxFunction
                PlaceHolder="Vegano"
                Modificar={Modificar}
                value="vegan"
                Checked={Filtro.includes("vegan")}
                Desabilitar={Desabilitar}
                />
                <ChexkBoxFunction
                PlaceHolder="Sem Gluten"
                Modificar={Modificar}
                value="glutenFree"
                Checked={Filtro.includes("glutenFree")}
                Desabilitar={Desabilitar}
                />
            </FormGroup>
            <Box>
                <IconButton
                onClick={() => SetFiltro([])}
                disabled={Desabilitar}
                >
                    <DeleteIcon
                    style={{
                        color:Purple
                    }}
                    />
                </IconButton>
            </Box>
        </Box>
    )

}