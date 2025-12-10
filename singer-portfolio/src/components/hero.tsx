"use client";
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Hero() {
    return(
        <section className='hero d-flex align-items-center text-center'>
            <Container>
                <div className='hero__icon mx-auto mb-4'>
                    <span className='hero__note'>♪</span> 
                </div>
                <h1 className="hero__title">MAGMA VIOLETA</h1>
                <h4 className='hero__subtitle'>Cantante</h4>
                <p className='hero__description'>
                    Descubre mi música, historias y experiencias. Soy una artista dedicada a crear conexiones
                    emocionales a través de cada canción.
                </p>
                <div className='d-flex flex-wrap gap-3 justify-content-center'>
                    <button className="btn btn-gradient me-2">Escuchar Música</button>
                    <button className="btn btn-gradient">Ver Galería</button>
                </div>
            </Container>
        </section>
    )
}