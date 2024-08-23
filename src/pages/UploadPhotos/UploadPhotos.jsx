import React, { useState } from 'react';
import './UploadPhotos.css';

const UploadPhotos = () => {
    const [photos, setPhotos] = useState([]);

    const handlePhotoUpload = (event) => {
        const newPhotos = Array.from(event.target.files).map((file) =>
            URL.createObjectURL(file)
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };

    const handleRemovePhoto = (photoUrl) => {
        setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo !== photoUrl));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const newPhotos = Array.from(event.dataTransfer.files).map((file) =>
            URL.createObjectURL(file)
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };

    const handleNextClick = () => {
        if (photos.length > 0) {
            console.log(`Proceeding with ${photos.length} photos`);
            // Add your navigation logic here
        }
    };

    return (
        <div className="upload-photos-container">
            <h1 className="upload-photos-title">Upload Your Photos</h1>
            <p className="photo-count">{photos.length} photos uploaded</p>

            <div
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <p className="upload-area-text">Drag & Drop your photos here or</p>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="upload-input"
                    onChange={handlePhotoUpload}
                />
            </div>

            {photos.length > 0 && (
                <div className="photos-grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="photo-card">
                            <img src={photo} alt={`Uploaded ${index}`} className="photo" />
                            <button
                                className="remove-photo-btn"
                                onClick={() => handleRemovePhoto(photo)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <button
                className={`next-btn ${photos.length === 0 ? 'disabled' : ''}`}
                onClick={handleNextClick}
                disabled={photos.length === 0}
            >
                Next
            </button>
        </div>
    );
};

export default UploadPhotos;
