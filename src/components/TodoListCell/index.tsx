import React from 'react';
import * as Styled from './styles';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { editMode, removeTodo } from '../../Store/Stock.stock';

export type TodoListCellProps = {
  title: string;
  id: number;
};

const TodoListCell = ({ title, id }: TodoListCellProps) => {
  const dispatch = useDispatch();

  return (
    //
    <Styled.Container>
      <Styled.TodoTitle>{title}</Styled.TodoTitle>
      <Styled.IconsDiv>
        <BiEditAlt onClick={() => dispatch(editMode({ id, title }))} />
        <BiTrash onClick={() => dispatch(removeTodo(id))} />
      </Styled.IconsDiv>
    </Styled.Container>
  );
};

export default TodoListCell;
