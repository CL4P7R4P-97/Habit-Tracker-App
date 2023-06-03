import React from 'react';
import './NoHabits.css';
 

const NoHabitsFound = () => {
  return (
    <div className="no-habits-found">
      <img src='https://media.giphy.com/media/JJKmgrEvchDwbWgSIL/giphy.gif' alt="Cartoon" className="cartoon-image" />
      <h2 className="message">No Habits Found!</h2>
    </div>
  );
};

export default NoHabitsFound;
