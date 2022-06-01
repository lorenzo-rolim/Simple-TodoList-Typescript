import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    position: absolute;

    width: 15vw;

    right: 7.5vw;
    top: 10vh;

    padding: 20px;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: white;

    outline: none;
    border: none;
    border-radius: 10px;

    background: #189ec4;

    border: 1px solid white;

    &::placeholder {
      color: white;
    }
  `}
`;
