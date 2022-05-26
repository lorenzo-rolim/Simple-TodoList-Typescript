import React from 'react';
import TodoListCell from '../TodoListCell';
import * as Styled from './styles';

interface TodoArr {
  id: number;
  title: string;
}

export type TodoListProps = {
  todos: Array<TodoArr>;
  RemoveTodo: (id: number) => void;
  setFlag: (bool: boolean, title?: string, id?: number) => void;
};

const TodoList = ({ todos, RemoveTodo, setFlag }: TodoListProps) => {
  return (
    //
    <Styled.Container>
      {todos.map((todo) => (
        <TodoListCell
          key={todo.id}
          title={todo.title}
          id={todo.id}
          RemoveTodo={RemoveTodo}
          setFlag={setFlag}
        />
      ))}
    </Styled.Container>
  );
};

export default TodoList;
