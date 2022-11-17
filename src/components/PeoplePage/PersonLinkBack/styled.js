import styled from "styled-components";

export const Alink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  padding: 5px;
  font-weight: var(--font-bold);
  font-size: var(--font-size-18);
  color: var(--color-yellow);
  & img {
    width: 16px;
  }
`;
