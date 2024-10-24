import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ローカルストレージに保存されたTodoがあれば取得、なければ空配列
  todoItemsData: localStorage.getItem('Todo') ? JSON.parse(localStorage.getItem('Todo')) : [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const getMaxTodoId = () => Math.max(...state.todoItemsData.map(item => item.id));
      state.todoItemsData.push({ id: state.todoItemsData.length !== 0 ? getMaxTodoId() + 1 : 1, title: action.payload, completed: false });
    },
    deleteTodo(state, action) {
      state.todoItemsData = state.todoItemsData.filter((item) => item.id !== action.payload);
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
      return { todoItemsData: [] };
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, editTodoStart, editTodoComplete, clearTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
