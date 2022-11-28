import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: var(--spacing-small);
  color: var(--color-white);
  text-align: center;
  border-radius: var(--border-radius-10);
  background-color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 0 2px var(--color-black);
  filter: drop-shadow(0px 0px 5px var(--color-white));
  @media screen and (max-width: 930px) {
    grid-column: 1/3;
  }
  @media screen and (max-width: 650px) {
    grid-column: 1/2;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-wrap: wrap;
  margin: var(--spacing-small);
  padding: var(--spacing-small);
  border-radius: var(--border-radius-5);
  background-color: var(--color-pink);
`;

