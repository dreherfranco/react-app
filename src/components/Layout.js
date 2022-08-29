import React from "react";
import Header from "./pages/Header";
import Home from "./home/Home";
import { Routes, Route} from 'react-router-dom';
import PresentationArticles from "./articles/list/PresentationArticles";

export default function Layout(){
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/home' element={ <Home/> }></Route>
                <Route path='/articles' element={ <PresentationArticles/> }></Route>
            </Routes>
        </React.Fragment>
    );
}