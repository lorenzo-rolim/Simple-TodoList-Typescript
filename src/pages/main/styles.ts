import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background: linear-gradient(to right, #000046, #1cb5e0);
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
  `}
`;

export const TodoComp = styled.div`
  ${() => css`
    width: 40vw;
    height: 85vh;
    background-color: white;

    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: column;
  `}
`;
