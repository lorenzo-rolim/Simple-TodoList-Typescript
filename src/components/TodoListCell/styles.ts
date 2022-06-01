import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${() => css`
    list-style: none;

    width: 98%;
    height: 5rem;
    margin-bottom: 1rem;

    background-color: #189ec4;
    border: 2px solid #158aaa;
    border-radius: 17px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    cursor: pointer;

    transition: all 0.15s ease-in-out;
  `}
`;

export const TodoTitle = styled.h1`
  ${() => css`
    color: white;

    font-size: 2rem;
    padding-left: 15px;
  `}
`;

export const IconsDiv = styled.div`
  ${() => css`
    width: 13%;
    margin-left: 4rem;

    color: white;

    display: flex;

    align-items: center;
    justify-content: space-between;

    position: absolute;
    right: 1rem;

    & > svg {
      width: 30px;
      height: 30px;
      cursor: pointer;

      transition: all 0.2s ease-in-out;
    }

    & > svg:hover {
      width: 30px;
      height: 30px;

      transform: scale(1.2);
    }
  `}
`;
