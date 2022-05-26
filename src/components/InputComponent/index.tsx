import React, { useState } from 'react';
import * as Styled from './styles';

export type InputCompProps = {
  AddTodo: (title: string) => void;
  EditTodo: () => void;
  setFlag: (bool: boolean, title?: string, id?: number) => void;
  Flag: boolean;
  EditValue: {
    id: number;
    title: string;
  };
};

const InputComp = ({
  AddTodo,
  Flag,
  setFlag,
  EditValue,
  EditTodo,
}: InputCompProps) => {
  const [InputValues, setInputValues] = useState<string>('');

  const InputChange = (event): void => {
    setInputValues(event.target.value);
  };

  const EditChange = (event): void => {
    setFlag(true, event.target.value, EditValue.id);
  };

  const SendData = () => {
    AddTodo(InputValues);
    setFlag(false);

    setInputValues('');
  };

  return (
    //
    <Styled.Container>
      {Flag ? (
        <>
          <Styled.InputSearch
            type="text"
            value={EditValue.title}
            onChange={(e: object) => EditChange(e)}
            maxLength={25}
          />
          <Styled.InputButton onClick={() => EditTodo()}>
            Editar
          </Styled.InputButton>
        </>
      ) : (
        <>
          <Styled.InputSearch
            type="text"
            value={InputValues}
            onChange={(e: object) => InputChange(e)}
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
