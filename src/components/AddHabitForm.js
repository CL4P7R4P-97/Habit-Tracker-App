import React, { useEffect, useState } from 'react';
import './AddHabitForm.css';

const AddHabitForm = ({ onClose, onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleInputChange = (event) => {
    setHabitName(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (habitName.trim() !== '') {
      const newHabit = {
        id: Date.now().toString(),
        name: habitName,
        status: getInitialStatus(),
      };
      onAddHabit(newHabit);
      onClose();
      setHabitName('');
    }
  };

   

  

  const getInitialStatus = () => {
    const initialStatus = {};
    const today = new Date().toISOString().split('T')[0];
    const dates = getPastSevenDays(today);

    for (const date of dates) {
      initialStatus[date] = 'not done';
    }

    return initialStatus;
  };

  const getPastSevenDays = (currentDate) => {
    const dates = [];
    const date = new Date(currentDate);

    for (let i = 0; i < 7; i++) {
      const pastDate = new Date(date);
      pastDate.setDate(date.getDate() - i);
      dates.push(pastDate.toISOString().split('T')[0]);
    }

    return dates;
  };

  return (
    <div className="add-habit-form-overlay">
      <div className="add-habit-form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">Add New Habit</h2>
        <form className="add-habit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter habit name"
            value={habitName}
            onChange={handleInputChange}
          />
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Add Habit
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitForm;
