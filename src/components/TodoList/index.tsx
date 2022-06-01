import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import TodoListCell from '../TodoListCell';
import * as Styled from './styles';

const TodoList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stock = useSelector((state: RootState) => state.stock);

  return (
    //
    <Styled.Container>
      {stock.todos.map((todo) => (
        <TodoListCell key={todo.id} title={todo.title} id={todo.id} />
      ))}
    </Styled.Container>
  );
};

export default TodoList;
