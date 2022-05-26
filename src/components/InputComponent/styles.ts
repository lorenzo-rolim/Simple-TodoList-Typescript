import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 85%;
    height: 12%;
    /* background-color: red; */
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const InputSearch = styled.input`
  ${() => css`
    height: 100%;
    width: 80%;

    padding: 20px;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: white;

    outline: none;
    border: none;
    border-radius: 10px 0px 0px 10px;

    background: #189ec4;

    border: 1px solid #158aaa;
  `}
`;

export const InputButton = styled.button`
  ${() => css`
    width: 20%;
    height: 100%;

    font-size: 1rem;
    color: white;
    cursor: pointer;

    border-radius: 0px 10px 10px 0px;
    border: 2px solid #158aaa;
    background: linear-gradient(to right, #1797bb, #1cb5e0);

    &:hover {
      background: linear-gradient(to right, #158aaa, #1cb5e0);
    }
  `}
`;
