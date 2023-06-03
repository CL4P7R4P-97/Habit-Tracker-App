// App.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import { addHabit, deleteHabit, getHabitsRequest, updateHabitStatus } from './actions';
import StatusBar from './components/StatusBar';

const App = ( ) => {

  const dispatch = useDispatch();
  const { habits, loading, error } = useSelector((state) =>state);
  const [showAddForm, setShowAddForm] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddHabit = (habitName) => {
    dispatch(addHabit(habitName));
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };
  
  const handleDeleteHabit = (habitId) => {
    dispatch(deleteHabit(habitId));
  };

  const handleStatusChange = (id) => {
    dispatch(updateHabitStatus(id));
  };
  
  useEffect(() => {
    dispatch(getHabitsRequest());
  }, [dispatch]);
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const completedHabits = habits.filter((habit) => habit.status[today] === 'completed');
    const completionPercentage = (completedHabits.length / habits.length) * 100 || 0;
    console.log(completionPercentage);
    setCompletionPercentage(completionPercentage);
  }, [habits]);
  
   
  
 
  

  if(loading){
    return <div>Loading</div>
  }
  

  return (
    <div className="app">
      <Navbar   toggleAddForm={toggleAddForm} />
     
      
    

      {showAddForm && (
        <AddHabitForm onClose={handleCloseForm} onAddHabit={handleAddHabit} />
      )}
      
{    <HabitList onStatusChange={handleStatusChange} onDeleteHabit={handleDeleteHabit}  habits={habits} loading={loading} error={error} />
}
<StatusBar completionPercentage={completionPercentage} />  
  </div>
  );
};

export default App;