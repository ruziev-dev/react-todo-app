import { createStore, applyMiddleware } from 'redux'


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SERVER_STATE': {
      return action.serverState;
    }
    case 'SET_IS_COMPLETED': {
      return [...state].map(el => el.id !== action.id ? el : { ...el, isCompleted: !el.isCompleted });
    }
    case 'DELETE_TASK': {
      return state.filter(el => el.id !== action.id);
    }
    case 'ADD_TASK': {
      return [
        ...state, { id: action.id, isCompleted: false, title: action.title, description: null }
      ];
    }
    case 'SET_DESCRIPTION': {
      return [...state].map(el => el.id !== action.id ? el : { ...el, description: action.description });
    }
    default:
      return state;
  }
};

const thunkMiddleware = store => next => action => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
}


export const store = createStore(reducer, applyMiddleware(thunkMiddleware))