// HabitList.js

import React, { useEffect, useState } from 'react';
import './HabitList.css';
import { useDispatch } from 'react-redux';
import ViewHabit from './ViewHabit';
import { updateHabit, viewHabit } from '../actions';
import EditHabitName from './EditHabitName';
import NoHabitsFound from './NoHabitsFound';

const HabitList = ({ habits, loading, error, onDeleteHabit, onStatusChange }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(habits);
  }, []);

  const handleDelete = (habitId) => {
    onDeleteHabit(habitId);
  };

  const handleViewHabit = (habit) => {
    setOpen(!isOpen);
    setSelectedHabit(habit);
    dispatch(viewHabit(habit.id));
  };

  const handleEdit=(habit)=>{

       setEditMode(!editMode);
       setSelectedHabit(habit);
  }

  const updateHabitName=(habit)=>{

    dispatch(updateHabit(habit));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="habit-list">
      {habits.length !== 0 ? (
        habits.map((habit) => (
          <div key={habit.id} className="habit-item">
            
            <div className='imgD'  onClick={()=>{handleEdit(habit)}}> <img  className='editLogo' src='https://img.icons8.com/?size=1x&id=9i9HlS0bGONj&format=png'></img><span className="habit-item__name">&emsp;{habit.name.length > 10 ? habit.name.substring(0,10)+'...':habit.name}</span> </div>
            <div className="habit-item__buttons">
              <button className="habit-item__button habit-item__view-button" onClick={() => handleViewHabit(habit)}>
               <img src='https://img.icons8.com/?size=1x&id=10053&format=png'></img>  View Habit
              </button>
              <button className="habit-item__button habit-item__delete-button" onClick={() => handleDelete(habit.id)}>
              <img src='https://img.icons8.com/?size=1x&id=aRBBoxOpSzb6&format=png'></img>  Delete Habit
              </button>
            </div>
            {selectedHabit &&isOpen    && selectedHabit.id === habit.id && (
              <ViewHabit setOpen={setOpen} habit={selectedHabit} onStatusChange={onStatusChange} />
            )}
             
             {
                editMode && selectedHabit.id === habit.id &&(
                  <EditHabitName habit={selectedHabit} onEdit={updateHabitName} onClose={handleEdit} />
                )
             }
            
          </div>
         
        ))
      ) : (
        <NoHabitsFound />
      )}
    </div>
  );
};

export default HabitList;
