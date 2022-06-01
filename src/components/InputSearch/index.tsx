import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { inputChange } from '../../Store/Stock.stock';
import * as Styled from './styles';

export type InputSearchProps = {
  children?: React.ReactNode;
};
const InputSearch = ({ children }: InputSearchProps) => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    //
    <Styled.Input
      type="text"
      value={stock.searchValue}
      placeholder="Pesquise aqui"
      onChange={(e: any) =>
        dispatch(inputChange({ title: e.target.value, mode: 'search' }))
      }
    />
  );
};

export default InputSearch;
