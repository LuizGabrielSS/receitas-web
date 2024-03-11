//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Telas
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import RecipeFinder from '../pages/recipefinder'
import Recipe from '../pages/recipe'

export default function RotasFunction(){

    return(
        <BrowserRouter
        basename='/receitas-web'
        >
            <Routes>
                <Route
                path="*"
                element={
                    <NotFoundScreen/>
                }
                />
                <Route
                path="/"
                element={
                    <HomeScreen/>
                }
                />
                <Route
                path="/finder"
                element={
                    <RecipeFinder/>
                }
                />
                <Route
                path="/recipe/:id"
                element={
                    <Recipe/>
                }
                />
            </Routes>
        </BrowserRouter>
    )

}