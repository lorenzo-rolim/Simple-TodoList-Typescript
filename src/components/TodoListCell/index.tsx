import React from 'react';
import * as Styled from './styles';
import { BiEditAlt, BiTrash } from 'react-icons/bi';

export type TodoListCellProps = {
  title: string;
  id: number;
  RemoveTodo: (id: number) => void;
  setFlag: (bool: boolean, title?: string, id?: number) => void;
};
const TodoListCell = ({
  title,
  id,
  RemoveTodo,
  setFlag,
}: TodoListCellProps) => {
  return (
    //
    <Styled.Container>
      <Styled.TodoTitle>{title}</Styled.TodoTitle>
      <Styled.IconsDiv>
        <BiEditAlt onClick={() => setFlag(true, title, id)} />
        <BiTrash onClick={() => RemoveTodo(id)} />
      </Styled.IconsDiv>
    </Styled.Container>
  );
};

export default TodoListCell;
