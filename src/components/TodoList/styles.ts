import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 93%;
    height: 80%;

    overflow: hidden;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #158aaa; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }

    & .feito {
      background-color: #50c878;
      border-color: #228b22;
      text-decoration: line-through;
    }
  `}
`;
