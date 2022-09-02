import React from "react";
import Header from "./pages/Header";
import Home from "./home/Home";
import { Routes, Route} from 'react-router-dom';
import ShoppingPresentation from "./shopping/page";
import { Container, Row } from "react-bootstrap";

export default function Layout(props){
    return (    
        <React.Fragment>
            <Header {...props} />
            <Container fluid>
                <Row>
                    <Routes>
                        <Route path='/' element={ <Home/> }></Route>
                        <Route path='/home' element={ <Home/> }></Route>
                        <Route path='/articles' element={ <ShoppingPresentation/> }></Route>
                    </Routes>
                </Row>
            </Container>
        </React.Fragment>
    );
}
