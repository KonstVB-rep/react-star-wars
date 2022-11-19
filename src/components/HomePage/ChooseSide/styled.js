import styled from "styled-components";

export const DivContainer = styled.div`
  --border-radius: 10px;

  --color-light: #29e52d;
  --color-dark: #d82228;
  --color-neutral: #ffff00;

  --color-shadow-light: rgba(41, 229, 45, 0.4);
  --color-shadow-dark: rgba(216, 34, 40, 0.4);
  --color-shadow-neutral: rgba(224, 224, 81, 0.4);
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const DivItem = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 250px;
  height: 450px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-black);
  transition: var(--transition);
  cursor: pointer;
  &.item__light {
    text-shadow: 0 0 5px currentColor;
    color: var(--color-light);
  }
  &.item__dark {
    text-shadow: 0 0 5px currentColor;
    color: var(--color-dark);
  }
  &.item__neutral {
    text-shadow: 0 0 5px currentColor;
    color: var(--color-neutral);
  }

  &.item__light:hover {
    box-shadow: 0 0 7px 2px var(--color-shadow-light);
  }
  &.item__dark:hover {
    box-shadow: 0 0 7px 2px var(--color-shadow-dark);
  }
  &.item__neutral:hover {
    box-shadow: 0 0 7px 2px var(--color-shadow-neutral);
  }
`;

export const DivItemHeader = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  font-size: var(--font-size-subheader);
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: var(--border-radius);
`;
