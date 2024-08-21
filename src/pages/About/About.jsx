import React, { useState, useEffect, useContext } from 'react';
import './About.css'
import LinkButton from "../../components/LinkButton/LinkButton";

export function About() {

    return (
        <>
            <main>
                <h1>About</h1>
                <LinkButton to="/" children="Home Page" />

            </main>
        </>
    )
}