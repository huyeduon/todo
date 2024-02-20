// action creators -> function to create action
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};
