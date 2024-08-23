import React, { useState } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import './Templates.css';

const templates = [
    { id: 1, imageUrl: 'public/templates/1.jpg' },
    { id: 2, imageUrl: 'public/templates/2.jpg' },
    { id: 3, imageUrl: 'public/templates/3.jpg' },
    { id: 4, imageUrl: 'public/templates/4.jpg' },
    { id: 5, imageUrl: 'public/templates/5.jpg' },
    { id: 6, imageUrl: 'public/templates/6.jpg' },
    { id: 7, imageUrl: 'public/templates/7.jpg' },
    { id: 8, imageUrl: 'public/templates/8.jpg' },
];



const Templates = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleTemplateClick = (id) => {
        setSelectedTemplate(selectedTemplate === id ? null : id);
    };

    const handleNextClick = () => {
        if (selectedTemplate !== null) {
            console.log(`Selected template: ${selectedTemplate}`);
            // Add your navigation logic here
        }
    };

    return (
        <div className="templates-container">
            <h1 className="templates-title">Choose Your Calendar Template</h1>

            <div className="templates-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card ${selectedTemplate === template.id ? 'selected' : ''
                            }`}
                        onClick={() => handleTemplateClick(template.id)}
                    >
                        <img
                            src={template.imageUrl}
                            alt={`Template ${template.id}`}
                            className="template-image"
                        />
                    </div>
                ))}
            </div>

            <button
                className={`next-btn ${selectedTemplate === null ? 'disabled' : ''}`}
                onClick={handleNextClick}
                disabled={selectedTemplate === null}
            >
                Next
            </button>
            <LinkButton to="/uploadPhotos">Uplaod photos</LinkButton>
        </div>
    );
};

export default Templates;