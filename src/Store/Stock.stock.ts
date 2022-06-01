import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mock from '../components/TodoList/mock';
import { EditValues } from './interfaces';

const stock = createSlice({
  name: 'stock',
  initialState: {
    todos: mock.data,
    flag: false,
    inputValue: '',
    editValue: { id: 0, title: '' },
  },
  reducers: {
    inputChange(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },

    addTodo(state, action: PayloadAction<Array<EditValues>>) {
      state.flag = false;
      state.inputValue = '';
      state.todos = action.payload;
    },

    editMode(state, action: PayloadAction<EditValues>) {
      state.flag = true;
      state.editValue = action.payload;
    },

    editInputValues(state, action: PayloadAction<string>) {
      state.editValue.title = action.payload;
    },

    editTodo(state) {
      state.flag = false;

      const arr = state.todos.map((todo) => {
        if (todo.id === state.editValue.id) {
          return state.editValue;
        }
        return todo;
      });

      state.todos = arr;
    },

    removeTodo(state, action: PayloadAction<number>) {
      const arr = state.todos.filter((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
      });

      state.todos = arr;
    },
  },
});

export const {
  inputChange,
  addTodo,
  editTodo,
  editMode,
  editInputValues,
  removeTodo,
} = stock.actions;
export default stock.reducer;
