import styled, { css } from "styled-components";
import "../index.css";

export const Button = styled.button`
  padding: 10px 10px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          border: 1px solid var(--color-white-btn);
          color: var(--color-white-btn);
          background-color: var(--color-blue-btn);
        `;
      default:
        return css`
          border: 1px solid var(--color-blue-btn);
          color: var(--color-blue-btn);
          background-color: var(--color-white-btn);
        `;
    }
  }};
  border-radius: 5px;
  font-weight: var(--font-family-main);
  font-size: var(--font-size-small);
  transition: var(--transition-btn);
  //border: none;

  &:hover {
    ${(props) =>
      props.theme === "dark"
        ? css`
            box-shadow: inset 0px -12px 0px -5px var(--color-white-btn);
            background-color: var(--color-blue-hover-btn);
          `
        : css`
            box-shadow: inset 0px -12px 0px -5px var(--color-blue-hover-btn);
            background-color: var(--color-white-btn);
          `};
  }

  &:active {
    background-color: ${(props) =>
      props.theme === "dark"
        ? "var(--color-blue-btn)"
        : "var(--color-white-btn)"};
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #a4a5a9;
    color: #c2bdbd;
    box-shadow: none;
    transform: none;
  }
`;
