import styled from "styled-components";

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-small);
  border-radius: var(--border-radius-10);
  font-size: var(--font-size-18);
  background-color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 0 2px var(--color-white);
  filter: drop-shadow(0px 0px 5px var(--color-white));
  & li {
    align-self: stretch;
  }
`;
