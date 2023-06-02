export const ADD_HABIT = 'ADD_HABIT';
export const GET_HABITS_REQUEST = 'GET_HABITS_REQUEST';
export const GET_HABITS_SUCCESS = 'GET_HABITS_SUCCESS';
export const GET_HABITS_FAILURE = 'GET_HABITS_FAILURE';
export const DELETE_HABIT = 'DELETE_HABIT';
export const UPDATE_HABIT = 'UPDATE_HABIT';
export const VIEW_HABIT = 'VIEW_HABIT';
export const UPDATE_HABIT_STATUS = 'UPDATE_HABIT_STATUS';
export const SET_HABIT_STATUS = 'SET_HABIT_STATUS';


export const addHabit = (habit) => {
return {
type: ADD_HABIT,
payload: habit,
};
};


export const updateHabit=(habit)=>{

  return {
    type: UPDATE_HABIT,
    payload: habit
  };
};

export const getHabitsInitial = ()=>{

  return {
    type: GET_HABITS_REQUEST,

  }
}

 
export const getHabitsSuccess = (habits) => {
return {
type: GET_HABITS_SUCCESS,
payload: habits,
};
};

export const getHabitsFailure = (error) => {
return {
type: GET_HABITS_FAILURE,
payload: error,
};
};

export const deleteHabit = (habitId) => {
return {
type: DELETE_HABIT,
payload: habitId,
};
};

export const updateHabitStatus = (habitId, date, status) => {
  return {
    type: UPDATE_HABIT_STATUS,
    payload: {
      habitId,
      date,
      status,
    },
  };
};
export const viewHabit = (habitId) => {
return {
type: VIEW_HABIT,
payload: habitId,
};
};

export const getHabitsRequest = () => {
  return async (dispatch) => {
    dispatch(getHabitsInitial());

    try {
      const storedHabits =  localStorage.getItem('habits');
       
      console.log('fetched from storage', storedHabits);

      if (storedHabits) {
        dispatch(getHabitsSuccess(JSON.parse(storedHabits)));
      } else {
        var nHabits = [];
        localStorage.setItem('habits', JSON.stringify(nHabits));
        dispatch(getHabitsFailure('Habits not found'));
      }
    } catch (error) {
      dispatch(getHabitsFailure('Error retrieving habits'));
    }
  };
};


export const setHabitStatus = (habitId, date, status) => {
  return {
    type: SET_HABIT_STATUS,
    payload: {
      habitId,
      date,
      status,
    },
  };
};
