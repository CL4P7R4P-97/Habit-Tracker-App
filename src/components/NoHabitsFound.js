import React from 'react';
import './NoHabits.css';
 

const NoHabitsFound = () => {
  return (
    <div className="no-habits-found">
      <img src='https://img.icons8.com/?size=1x&id=gZDRHgz1jHQY&format=gif' alt="Cartoon" className="cartoon-image" />
      <h2 className="message">No Habits Found!</h2>
    </div>
  );
};

export default NoHabitsFound;
