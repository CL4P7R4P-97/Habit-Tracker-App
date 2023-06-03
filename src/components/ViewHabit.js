import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHabitStatus } from '../actions';
import './ViewHabit.css';

const ViewHabit = ({ habit, setOpen }) => {
  const [status, setStatus] = useState(habit.status);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(habit);
  }, []);

  const handleStatusChange = (date, value) => {
    const updatedStatus = { ...status, [date]: value };
    setStatus(updatedStatus);
    dispatch(setHabitStatus(habit.id, date, value));
  };

  const renderStatusOptions = () => {
    const today = new Date().toISOString().split('T')[0];
    const dates = getPastSevenDays(today);

    return dates.map((date) => {
      const value = status[date] || 'none';

      return (
        <div className="status-option" key={date}>
          <span className="date">{date}</span>
          <select
            className="status-select"
            value={value}
            onChange={(e) => handleStatusChange(date, e.target.value)}
          >
            <option value="none">None</option>
            <option value="completed">Completed</option>
            <option value="missed">Missed</option>
          </select>
        </div>
      );
    });
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

  const handleClose = () => {
   setOpen(false); 
  };

  return (
    <div className="view-habit">
      <div className="view-habit-container">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h3 className="habit-name">{habit.name.length > 10 ? habit.name.substring(0,10)+'...':habit.name}</h3>
        <div className="habit-status">{renderStatusOptions()}</div>
      </div>
    </div>
  );
};

export default ViewHabit;
