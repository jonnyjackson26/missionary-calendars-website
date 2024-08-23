import LinkButton from '../../components/LinkButton/LinkButton';
import React, { useState } from 'react';
import './Options.css';

const Options = () => {
    const [missionaryType, setMissionaryType] = useState('Elder');
    const [missionaryInfo, setMissionaryInfo] = useState({
        firstName: '',
        lastName: '',
        missionName: '',
        mtcStartDate: '',
        fieldArrivalDate: '',
        releaseDate: '',
    });
    const [showHolidays, setShowHolidays] = useState({
        christmas: true,
        halloween: true,
        valentinesDay: true,
    });
    const [importantDates, setImportantDates] = useState([{ month: '', day: '', name: '' }]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMissionaryInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleHolidayChange = (e) => {
        const { name, checked } = e.target;
        setShowHolidays((prevHolidays) => ({ ...prevHolidays, [name]: checked }));
    };

    const handleImportantDateChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDates = [...importantDates];
        updatedDates[index][name] = value;
        setImportantDates(updatedDates);
    };

    const addImportantDate = () => {
        setImportantDates((prevDates) => [...prevDates, { month: '', day: '', name: '' }]);
    };

    const removeImportantDate = (index) => {
        const updatedDates = importantDates.filter((_, i) => i !== index);
        setImportantDates(updatedDates);
    };

    const handleNextClick = () => {
        console.log('Proceeding with:', {
            missionaryType,
            missionaryInfo,
            showHolidays,
            importantDates,
        });
        // Add your navigation logic here
    };

    return (
        <div className="options-container">
            <h1 className="options-title">Missionary Calendar Options</h1>

            <div className="missionary-type-container">
                <label className="missionary-type-label">Is your missionary an:</label>
                <div className="missionary-type-buttons">
                    <button
                        className={`type-button ${missionaryType === 'Elder' ? 'active' : ''}`}
                        onClick={() => setMissionaryType('Elder')}
                        aria-pressed={missionaryType === 'Elder'}
                    >
                        Elder (2-year calendar)
                    </button>
                    <button
                        className={`type-button ${missionaryType === 'Sister' ? 'active' : ''}`}
                        onClick={() => setMissionaryType('Sister')}
                        aria-pressed={missionaryType === 'Sister'}
                    >
                        Sister (18-month calendar)
                    </button>
                </div>
            </div>

            <div className="missionary-info">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={missionaryInfo.firstName}
                    onChange={handleInputChange}
                    aria-label="First Name"
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={missionaryInfo.lastName}
                    onChange={handleInputChange}
                    aria-label="Last Name"
                />

                <label htmlFor="missionName">Mission Name:</label>
                <input
                    type="text"
                    id="missionName"
                    name="missionName"
                    value={missionaryInfo.missionName}
                    onChange={handleInputChange}
                    aria-label="Mission Name"
                />

                <label htmlFor="mtcStartDate">MTC Start Date:</label>
                <input
                    type="date"
                    id="mtcStartDate"
                    name="mtcStartDate"
                    value={missionaryInfo.mtcStartDate}
                    onChange={handleInputChange}
                    aria-label="MTC Start Date"
                />

                <label htmlFor="fieldArrivalDate">Scheduled Arrival in Field Date:</label>
                <input
                    type="date"
                    id="fieldArrivalDate"
                    name="fieldArrivalDate"
                    value={missionaryInfo.fieldArrivalDate}
                    onChange={handleInputChange}
                    aria-label="Scheduled Arrival in Field Date"
                />

                <label htmlFor="releaseDate">Scheduled Release Date:</label>
                <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    value={missionaryInfo.releaseDate}
                    onChange={handleInputChange}
                    aria-label="Scheduled Release Date"
                />
            </div>

            <div className="holiday-options">
                <label>
                    <input
                        type="checkbox"
                        name="christmas"
                        checked={showHolidays.christmas}
                        onChange={handleHolidayChange}
                        aria-checked={showHolidays.christmas}
                    />
                    Show Christmas
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="halloween"
                        checked={showHolidays.halloween}
                        onChange={handleHolidayChange}
                        aria-checked={showHolidays.halloween}
                    />
                    Show Halloween
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="valentinesDay"
                        checked={showHolidays.valentinesDay}
                        onChange={handleHolidayChange}
                        aria-checked={showHolidays.valentinesDay}
                    />
                    Show Valentine's Day
                </label>
            </div>

            <div className="important-dates">
                <h2>Important Dates</h2>
                {importantDates.map((date, index) => (
                    <div key={index} className="important-date">
                        <label htmlFor={`month-${index}`}>Month:</label>
                        <input
                            type="number"
                            id={`month-${index}`}
                            name="month"
                            value={date.month}
                            onChange={(e) => handleImportantDateChange(index, e)}
                            min="1"
                            max="12"
                            aria-label={`Month for important date ${index + 1}`}
                        />

                        <label htmlFor={`day-${index}`}>Day:</label>
                        <input
                            type="number"
                            id={`day-${index}`}
                            name="day"
                            value={date.day}
                            onChange={(e) => handleImportantDateChange(index, e)}
                            min="1"
                            max="31"
                            aria-label={`Day for important date ${index + 1}`}
                        />

                        <label htmlFor={`name-${index}`}>Name:</label>
                        <input
                            type="text"
                            id={`name-${index}`}
                            name="name"
                            value={date.name}
                            onChange={(e) => handleImportantDateChange(index, e)}
                            aria-label={`Name for important date ${index + 1}`}
                        />

                        <button
                            className="remove-date-btn"
                            onClick={() => removeImportantDate(index)}
                            aria-label={`Remove important date ${index + 1}`}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button className="add-date-btn" onClick={addImportantDate} aria-label="Add another important date">
                    Add Another Date
                </button>
            </div>

            <button className="next-btn" onClick={handleNextClick} aria-label="Next">
                Next
            </button>
        </div>
    );
};

export default Options;
