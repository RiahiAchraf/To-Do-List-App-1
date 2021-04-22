// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        todo: state.todo.filter(
          (item) => item.id !== action.playload,
        ),
      };
    case 'ADD_ITEM':
      return {
        ...state,
        todo: [action.playload, ...state.todo],
      };
    default:
      return state;
  }
};
