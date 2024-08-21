import React, { useState, useEffect, useContext } from 'react';
import './Buy.css'
import LinkButton from "../../components/LinkButton/LinkButton";

export function Buy() {

    return (
        <>
            <main>
                <h1>buy</h1>
                <LinkButton to="/" children="Home Page" />

            </main>
        </>
    )
}