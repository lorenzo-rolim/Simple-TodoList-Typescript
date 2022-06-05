import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import TodoListCell from '../TodoListCell';
import * as Styled from './styles';

import { EditValues } from '../../Store/interfaces';
import { fetchData } from '../../Store/Stock.stock';

const TodoList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    //
    <Styled.Container>
      {stock.todos
        .filter((todo: EditValues) => {
          if (stock.searchValue === '') {
            return todo;
          } else if (
            todo.title.toLowerCase().includes(stock.searchValue.toLowerCase())
          ) {
            return todo;
          }
        })
        .map((todo) => (
          <TodoListCell key={todo._id} title={todo.title} id={todo._id} />
        ))}
    </Styled.Container>
  );
};

export default TodoList;
