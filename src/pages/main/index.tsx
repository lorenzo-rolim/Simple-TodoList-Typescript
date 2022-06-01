import React from 'react';
import InputComp from '../../components/InputComponent';
import TodoList from '../../components/TodoList';
import * as Styled from './styles';

const MainPage = () => {
  return (
    //
    <Styled.Container>
      <Styled.TodoComp>
        <InputComp />

        <TodoList />
      </Styled.TodoComp>
    </Styled.Container>
  );
};

export default MainPage;
