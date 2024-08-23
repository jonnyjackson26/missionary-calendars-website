import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import LinkButton from "../../components/LinkButton/LinkButton";
import { FaCheckCircle, FaUpload, FaCalendarAlt } from 'react-icons/fa';
import axios from "axios"

const Home = () => {

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api/users");
        console.log(response.data.users)
    };
    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <div className="home-container">
            <h1 className="home-title">Custom Missionary Calendars</h1>
            <p className="home-subtitle">In Just Three Simple Steps</p>

            <div className="steps-container">
                <div className="step">
                    <FaCheckCircle className="step-icon" />
                    <p className="step-text">1. Choose Template</p>
                </div>
                <div className="step">
                    <FaUpload className="step-icon" />
                    <p className="step-text">2. Upload Photos</p>
                </div>
                <div className="step">
                    <FaCalendarAlt className="step-icon" />
                    <p className="step-text">3. Input Dates</p>
                </div>
            </div>

            <LinkButton to="/templates" className="get-started-btn">Get Started</LinkButton>
        </div>
    );
};

export default Home;
