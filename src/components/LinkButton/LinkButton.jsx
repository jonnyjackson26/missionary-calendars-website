import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css'; // Import the CSS file for styling

const LinkButton = ({ to, children }) => {
    return (
        <Link to={to} className="link-button">
            {children}
        </Link>
    );
};

export default LinkButton;