import { createSlice } from "@reduxjs/toolkit";

// ローカルストレージに保存されたTodoがあれば取得、なければ空配列
const initialTodos = localStorage.getItem('Todo') ? JSON.parse(localStorage.getItem('Todo')) : [];

const initialState = {
  todoItemsData: initialTodos,
  amount: initialTodos.length,
  completedCount: (initialTodos.filter(todoItem => todoItem.completed === true)).length,
  incompletedCount: (initialTodos.filter(todoItem => todoItem.completed === false)).length,
};

const getCompletedTodoItemCount = (state) => {
  const todos = state.todoItemsData.filter(todoItem => todoItem.completed === true);
  return todos.length;
};

const getIncompletedTodoItemCount = (state) => {
  const todos = state.todoItemsData.filter(todoItem => todoItem.completed === false);
  return todos.length;
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const getMaxTodoId = () => Math.max(...state.todoItemsData.map(item => item.id));
      state.todoItemsData.push({ id: state.amount !== 0 ? getMaxTodoId() + 1 : 1, title: action.payload, completed: false });
      state.amount += 1;
      state.completedCount = getCompletedTodoItemCount(state);
      state.incompletedCount = getIncompletedTodoItemCount(state);
    },
    deleteTodo(state, action) {
      const newTodoItems = state.todoItemsData.filter((item) => item.id !== action.payload);
      state.todoItemsData = newTodoItems;
      state.amount = state.todoItemsData.length;
      state.completedCount = getCompletedTodoItemCount(state);
      state.incompletedCount = getIncompletedTodoItemCount(state);
    },
    updateTodo(state, action) {
      const newTodos = state.todoItemsData.map(item => {
        const todo = { ...item };
        if (todo.id === action.payload) {
          todo.completed = !item.completed;
        }
        return todo;
      });
      state.todoItemsData = newTodos;
      state.completedCount = getCompletedTodoItemCount(state);
      state.incompletedCount = getIncompletedTodoItemCount(state);
    },
    editTodoStart(state, action) {
        state.todoItemsData = state.todoItemsData.map(todo => {
            return todo.id === action.payload ? { ...todo, isEditing: true } : todo
        });
    },
    editTodoComplete(state, action) {
        state.todoItemsData = state.todoItemsData.map(todo => {
            return todo.id === action.payload.id ? { ...todo, title: action.payload.title, isEditing: false } : todo
        });
    },
    clearTodo() {
      return { todoItemsData: [], amount: 0, completedCount: 0, incompletedCount: 0, };
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, editTodoStart, editTodoComplete, clearTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
