import types from './counter/types';

const initial_state = {
  count: 0,
};

const counterReducer = (state = initial_state, action) => {
  if (action.type === types.INCREMENT_COUNTER) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === types.DECREMENT_COUNTER) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === types.RESET_COUNTER) {
    return initial_state;
  } else if (action.type === 'GOTO') {
    return {
      ...state,
      count: action.value, //masukin variabel panambah
    };
  }

  return state;
};

export default counterReducer;
