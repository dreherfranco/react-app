import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = ({ menu }) => {
    console.log(menu[0].to)
        return (
            <Nav defaultActiveKey="/" as="ul" className="bg-dark">
                <Nav.Item as="li" className="p-3">
                     <img src={logo} className="w-25" alt="logo" />   
                </Nav.Item>

                {menu.map(({to,icon,title},i) => 
                    {
                       return( 
                            <Nav.Item as="li" className="p-3" key={i} >
                                <Nav.Link as={Link} to={to} >
                                    <i className={icon}></i>{title}
                                </Nav.Link>
                            </Nav.Item>
                        )                                   
                        
                   })
                }
            </Nav>
        );
    
}

export default Header;