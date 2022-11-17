import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--spacing-small);
  margin-bottom: var(--spacing-large);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  & a {
    display: block;
    margin: 0 var(--spacing-small);
    padding: 5px var(--spacing-small);
    min-width: 70px;
    color: var(--color-white);
    text-align: center;
    font-family: sans-serif;
    text-decoration: none;
    font-weight: var(--font-bold);
    text-shadow: var(--text-shadow-blue);
    border: 2px solid transparent;
    transition: var(--transition);
    letter-spacing: 1px;
  }
  & a.active {
    border: 2px solid var(--color-violet);
    color: var(--color-violet);
    border-radius: var(--border-radius-5);
  }
`;
