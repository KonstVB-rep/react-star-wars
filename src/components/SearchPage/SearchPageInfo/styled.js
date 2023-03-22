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