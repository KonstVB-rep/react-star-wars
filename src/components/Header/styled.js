import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--spacing-small);
  margin-bottom: var(--spacing-large);
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-10);
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

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: var(--spacing-small);
  object-fit: cover;
  object-position: center center;
`;
