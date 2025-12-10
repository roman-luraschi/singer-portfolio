"use client"

import React from 'react';
import {useState} from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        {name: 'Inicio', href: '#inicio'},
        {name: 'Biografía', href: '#biografia'},
        {name: 'Música', href: '#musica'},
        {name: 'Eventos', href: '#eventos'},
        {name: 'Contacto', href: '#contacto'},
    ]

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="align-items-center">
            <Container className="d-flex justify-content-between align-items-center h-100">
                <p className="fs-3 fw-bold text-white m-0 mt-2 mb-2">Magma Violeta</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
                <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
                    <Nav className="ms-auto">
                        {navItems.map((item, index) => (
                            <Nav.Link key={index} href={item.href} className="mx-2">{item.name}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}