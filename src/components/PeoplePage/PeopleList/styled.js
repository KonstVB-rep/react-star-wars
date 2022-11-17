import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  padding: var(--spacing-small);
  margin: 0;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

export const Li = styled.li`
  min-width: 220px;
  height: auto;
  border-radius: var(--border-radius-10);
  font-size: 20px;
  background-color: var(--color-white);
  & a {
    text-decoration: none;
    color: var(--color-black);
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  border-radius: var(--border-radius-10) var(--border-radius-10) 0 0;
  object-fit: cover;
  object-position: top center;
`;
