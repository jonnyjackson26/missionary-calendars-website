import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import LinkButton from "../../components/LinkButton/LinkButton";

export function Home() {

    return (
        <>
            <main>
                <h1>Home</h1>
                <LinkButton to="/" children="Home Page" />
                <LinkButton to="/buy" children="Buy Page" />
                <LinkButton to="/about" children="About Page" />
            </main>
        </>
    )
}