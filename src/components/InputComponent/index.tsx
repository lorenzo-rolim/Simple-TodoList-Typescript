import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  addTodo,
  editInputValues,
  editTodo,
  inputChange,
} from '../../Store/Stock.stock';
import * as Styled from './styles';

const InputComp = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  const SendData = () => {
    if (stock.inputValue === '') {
      return;
    }

    const id = Math.floor(Math.random() * 1000);

    dispatch(addTodo([{ id: id, title: stock.inputValue }, ...stock.todos]));
  };

  return (
    //
    <Styled.Container>
      {stock.flag ? (
        <>
          <Styled.InputSearch
            type="text"
            value={stock.editValue.title}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => dispatch(editInputValues(e.target.value))}
            maxLength={25}
          />
          <Styled.InputButton onClick={() => dispatch(editTodo())}>
            Editar
          </Styled.InputButton>
        </>
      ) : (
        <>
          <Styled.InputSearch
            type="text"
            value={stock.inputValue}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => dispatch(inputChange(e.target.value))}
            maxLength={25}
          />
          <Styled.InputButton onClick={() => SendData()}>
            Adicionar
          </Styled.InputButton>
        </>
      )}
    </Styled.Container>
  );
};

export default InputComp;
