import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import LinkButton from "../../components/LinkButton/LinkButton";
import { FaCheckCircle, FaUpload, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
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

            <button className="get-started-btn">Get Started</button>
        </div>
    );
};

export default Home;
