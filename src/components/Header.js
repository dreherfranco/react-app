import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <Nav defaultActiveKey="/" as="ul" className="bg-dark">
                 <Nav.Item as="li" className="p-3">
                     <img src={logo} className="w-25" alt="logo" />
                 </Nav.Item>
                <Nav.Item as="li" className="p-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="p-3">
                        <Nav.Link as={Link} to="/counter" >Contador</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="p-3">
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Header;