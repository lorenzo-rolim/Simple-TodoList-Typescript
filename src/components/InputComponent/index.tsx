import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  addTodoApi,
  editInputValues,
  editTodoApi,
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

    dispatch(addTodoApi(stock.inputValue));
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
          <Styled.InputButton
            onClick={() => dispatch(editTodoApi(stock.editValue))}
          >
            Editar
          </Styled.InputButton>
        </>
      ) : (
        <>
          <Styled.InputSearch
            type="text"
            value={stock.inputValue}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) =>
              dispatch(inputChange({ title: e.target.value, mode: 'add' }))
            }
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
