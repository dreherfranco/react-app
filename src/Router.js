import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';

export default function Router(){

        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                    <Route path='/counter' element={ <Counter/> }></Route>
                </Routes>
            </BrowserRouter>
        );
    
}

//export default Router;