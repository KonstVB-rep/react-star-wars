import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 64px;
  height: 64px;
  & span {
    display: flex;
    position: absolute;
    right: 5px;
    top: -5px;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: white;
    z-index: 1;
  }
  & img {
    filter: drop-shadow(0px 0px 2px var(--color-white));
  }
`;
