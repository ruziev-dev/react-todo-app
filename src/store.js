export const initialState = [
  { id: 1609409078, isCompleted: false, title: 'Купить еды', description: 'Много еды' },
  { id: 1609409079, isCompleted: false, title: 'Позвонить', description: 'Всем позвонить, срочно!!!' },
  { id: 1609409080, isCompleted: true, title: 'Сделать что-то полезное', description: null },
  { id: 1609409081, isCompleted: false, title: 'Спасти Мир', description: null },
  { id: 1609409082, isCompleted: false, title: 'Надеть шапку', description: null },
];


export const reducer = (state, action) => {
  switch (action.type) {
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
