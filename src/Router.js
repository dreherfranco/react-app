import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                    <Route path='/posts' element={ <Posts/> }></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;