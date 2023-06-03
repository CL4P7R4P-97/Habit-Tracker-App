import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHabit } from '../actions';
import './Home.css';

const Home = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  const handleDeleteHabit = (habitId) => {
    dispatch(deleteHabit(habitId));
  };

  return (
    <div className="home-container">
      <h2 className="page-title">Habits</h2>
      {habits.length === 0 ? (
        <p>No habits found.</p>
      ) : (
        <ul className="habit-list">
          {habits.map((habit) => (
            <li key={habit.id} className="habit-item">
              <div className="habit-info">
                <p className="habit-name">{habit.name}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteHabit(habit.id)}
                >
                  Delete
                </button>
                <button className="status-button">View Status</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
