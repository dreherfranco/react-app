import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/pages/Header';
import Home from './components/home/Home';

export default function Router(){

        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                </Routes>
            </BrowserRouter>
        );
    
}

//export default Router;