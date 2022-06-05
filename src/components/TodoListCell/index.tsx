import React, { useState } from 'react';
import * as S from './styles';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { editMode, removeTodoApi } from '../../Store/Stock.stock';

export type TodoListCellProps = {
  title: string;
  id: string;
};

const TodoListCell = ({ title, id }: TodoListCellProps) => {
  const [feito, setFeito] = useState(false);

  const dispatch = useDispatch();

  function editTodo(e) {
    e.stopPropagation();

    dispatch(editMode({ id, title }));
  }

  function removeTodo(e) {
    e.stopPropagation();

    dispatch(removeTodoApi(id));
  }

  return (
    //
    <S.Container
      onClick={() => setFeito(!feito)}
      className={feito ? 'feito' : ''}
    >
      <S.TodoTitle>{title}</S.TodoTitle>
      <S.IconsDiv>
        <BiEditAlt onClick={(e) => editTodo(e)} />

        <BiTrash onClick={(e) => removeTodo(e)} />
      </S.IconsDiv>
    </S.Container>
  );
};

export default TodoListCell;
