import React, { useState } from 'react';
import InputComp from '../../components/InputComponent';
import TodoList from '../../components/TodoList';
import mock from '../../components/TodoList/mock';
import * as Styled from './styles';

export type MainPageProps = {
  children?: React.ReactNode;
};

const InitialValues = {
  id: 0,
  title: '',
};

const MainPage = () => {
  const [Todos, setTodos] = useState(mock.data);
  const [Flag, setFlag] = useState(false);
  const [editValue, setEditValue] = useState(InitialValues);

  const AddTodo = (title: string): void => {
    if (title === '') {
      return;
    }

    const id = Math.floor(Math.random() * 1000);

    setTodos((state) => [{ id: id, title: title }, ...state]);
  };

  const RemoveTodo = (id: number): void => {
    setTodos((state) =>
      state.filter((todo) => {
        if (todo.id === id) {
          return;
        }
        return todo;
      }),
    );
  };

  const ChangeFlag = (bool: boolean, title?: string, id?: number): void => {
    setFlag(bool);
    setEditValue(() => {
      return {
        id: id,
        title: title,
      };
    });
  };

  const EditTodo = (): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === editValue.id) {
          return editValue;
        }
        return todo;
      }),
    );

    setFlag(false);
  };

  return (
    //
    <Styled.Container>
      <Styled.TodoComp>
        <InputComp
          AddTodo={AddTodo}
          Flag={Flag}
          setFlag={ChangeFlag}
          EditValue={editValue}
          EditTodo={EditTodo}
        />

        <TodoList todos={Todos} RemoveTodo={RemoveTodo} setFlag={ChangeFlag} />
      </Styled.TodoComp>
    </Styled.Container>
  );
};

export default MainPage;
