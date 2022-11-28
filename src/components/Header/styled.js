import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;
  padding: var(--spacing-small);
  margin-bottom: var(--spacing-large);
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-10);
  & > img{
    width: 60px;
    height: 60px;
    margin-right: var(--spacing-small);
    object-fit: cover;
    object-position: center center;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;

  @media screen and (max-width: 640px) {
    display: none;
  }

  & li a {
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
    @media screen and (max-width: 640px) {
      padding: var(--spacing-medium) 0;
      margin: 0;
      border-radius: unset;
      border-bottom: 2px solid var(--color-dark-grey);
      background-color: steelblue;
    }
  }

  & li a:hover {
    @media screen and (max-width: 640px) {
      border-radius: 0;
      color: var(--color-white);
      background-color: var(--color-violet);
    }
  }
  & li a:active {
    @media screen and (max-width: 640px) {
     letter-spacing: 5px;
    }
  }
`;


