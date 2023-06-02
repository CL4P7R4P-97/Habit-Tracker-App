import React, { useState } from 'react';
import './EditHabitName.css';

const EditHabitName = ({ habit, onClose, onEdit }) => {
  const [editedHabitName, setEditedHabitName] = useState(habit.name);

  const handleHabitNameChange = (event) => {
    setEditedHabitName(event.target.value);
  };

  const handleHabitNameSubmit = () => {
    if (editedHabitName.trim() !== '') {
      const updatedHabit = {
        ...habit, name: editedHabitName
      }
      onEdit(updatedHabit);
      onClose();
    }
  };

  return (
    <div className="edit-habit-name-overlay">
      <div className="edit-habit-name-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <input
          type="text"
          value={editedHabitName}
          onChange={handleHabitNameChange}
        />
        <button onClick={handleHabitNameSubmit}>OK</button>
      </div>
    </div>
  );
};

export default EditHabitName;
