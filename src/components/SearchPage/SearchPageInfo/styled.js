import styled from 'styled-components'

export const Ul = styled.ul`
  column-count: 3;
  padding: 40px 10px;

  @media screen and (max-width: 850px) {
    column-count: 2;
  }
  @media screen and (max-width: 480px) {
    column-count: 1;
  }
`

export const H2 = styled.h2`
  padding: 20px 10px;
  border-radius: var(--border-radius-10);
  text-align: center;
  background-color: rgba(73, 69, 69, 0.56);
  font-size: 50px;
  color: var(--color-white)
`

export const Li = styled.li`
  & a {
    display: inline-flex;
    column-gap: 10px;
    text-decoration: none;
  }

  & img {
    width: 100px;
    object-fit: cover;
    border: 2px solid white;
    border-radius: var(--border-radius-5);
    object-position: center center;
  }

  & p {
    color: var(--color-white)
  }

  @media screen and (max-width: 480px) {
    & img {
      width: 50%;
    }
  }

`