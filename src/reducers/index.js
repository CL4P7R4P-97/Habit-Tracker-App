import {
    ADD_HABIT,
    GET_HABITS_REQUEST,
    GET_HABITS_SUCCESS,
    GET_HABITS_FAILURE,
    DELETE_HABIT,
    UPDATE_HABIT,
    VIEW_HABIT,
    UPDATE_HABIT_STATUS,
    SET_HABIT_STATUS,
    } from '../actions';
    
    

    const initialState = {
        habits: [], // Set initial state as an empty array
        loading: false,
        error: null,
        selectedHabit: null,
        viewedHabit: null,
      };
    
    const habitReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_HABIT:
    var updatedHabitss = [...state.habits, action.payload];
    localStorage.setItem('habits', JSON.stringify(updatedHabitss));
    return {
    ...state,
    error: null,
    habits: updatedHabitss,
    };
    case GET_HABITS_REQUEST:
      console.log('getting habits');
    return {
    ...state,
    loading: true,
    error: null,
    };
    case GET_HABITS_SUCCESS:
    
     
     
    return {
    ...state,
    habits: action.payload,
    loading: false,
    error: null,
    };

    case GET_HABITS_FAILURE:
    
     
     
    return {
    ...state,
    habits: [],
    loading: false,
    error: action.payload,
    };
    case DELETE_HABIT:
    const habitId = action.payload;
    const filteredHabits = state.habits.filter((habit) => habit.id !== habitId);
    localStorage.setItem('habits', JSON.stringify(filteredHabits));
    return {
    ...state,
    habits: filteredHabits,
    };
    case UPDATE_HABIT:
    const updatedHabit = action.payload;
    const updatedHabits = state.habits.map((habit) =>
    habit.id === updatedHabit.id ? updatedHabit : habit
    );
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
    return {
    ...state,
    habits: updatedHabits,
    };
    case VIEW_HABIT:
    const habitIds = action.payload;
    const selectedHabit = state.habits.find((habit) => habit.id === habitIds);
    return {
    ...state,
    selectedHabit,
    };

    case UPDATE_HABIT_STATUS:
        const { habitID, date, status } = action.payload;
        const updateddHabits = state.habits.map((habit) => {
          if (habit.id === habitID) {
            return {
              ...habit,
              status: {
                ...habit.status,
                [date]: status,
              },
            };
          }
          return habit;
        });
        localStorage.setItem('habits', JSON.stringify(updateddHabits));
        return {
          ...state,
          habits: updateddHabits,
        };

        case VIEW_HABIT:
  const viewedHabitId = action.payload;
  const selectedHabitx = state.habits.find((habit) => habit.id === viewedHabitId);
  console.log(selectedHabitx);
  return {
    ...state,
    viewedHabit: selectedHabitx,
  };

          case SET_HABIT_STATUS:
       
      const updatedHabitsx = state.habits.map((habit) => {
        console.log(habit.id, action.payload.habitId);
        if (habit.id === action.payload.habitId) {
          const updatedStatusx = { ...habit.status, [action.payload.date]: action.payload.status };
        
          return { ...habit, status: updatedStatusx };
        }
        return habit;
      });
      
      localStorage.setItem('habits', JSON.stringify(updatedHabitsx));
     
      return {
        ...state,
        habits: updatedHabitsx,
      };
    default:
      console.log('returning default');
    return state;
    }
    };
    
    export default habitReducer;