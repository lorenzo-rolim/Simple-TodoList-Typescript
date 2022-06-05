import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from '.';
import api from '../api/api';
import { EditValues } from './interfaces';

const stock = createSlice({
  name: 'stock',
  initialState: {
    todos: [],
    flag: false,
    inputValue: '',
    searchValue: '',
    editValue: { id: '', title: '' },
  },
  reducers: {
    inputChange(state, action: PayloadAction<{ title: string; mode: string }>) {
      if (action.payload.mode === 'search') {
        state.inputValue = '';
        state.searchValue = action.payload.title;
      }

      if (action.payload.mode === 'add') {
        state.searchValue = '';
        state.inputValue = action.payload.title;
      }
    },

    addTodo(state, action: PayloadAction<Array<EditValues>>) {
      console.log(action.payload);

      state.flag = false;
      state.inputValue = '';
      state.todos = action.payload;
    },
    editTodo(state) {
      state.flag = false;
      state.inputValue = '';
    },

    editMode(state, action: PayloadAction<EditValues>) {
      state.flag = true;
      state.editValue = action.payload;
    },

    editInputValues(state, action: PayloadAction<string>) {
      state.editValue.title = action.payload;
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
  editMode,
  editInputValues,
  removeTodo,
  editTodo,
} = stock.actions;
export default stock.reducer;

export function fetchData(): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await api.get('todos');

    const data = await response.data;

    console.log(data);

    dispatch(addTodo(data));
  };
}

export function addTodoApi(title: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.post('todo', {
      title: title,
      description: 'teste de descrição',
    });

    dispatch(fetchData());
  };
}

export function editTodoApi(values: EditValues): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.put(`todo/${values.id}`, {
      title: values.title,
      description: 'qualquer coisa',
    });
    console.log(values.id);
    dispatch(fetchData());
  };
}

export function removeTodoApi(id: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.delete(`todo/${id}`);
    console.log(id);
    dispatch(fetchData());
  };
}
