import styled from 'styled-components';

export const WrapperNav = styled.div`
  
  position: absolute;
  top: 0%;
  left: 0;
  transform: ${ props => props.hide ? 'translateY(0%)' : 'translateY(-110%)'};
  width: 100%;
  height: auto;
  z-index: 2;
  transition: transform .3s ease-in-out;

  & button {
    top: 10px;
    left: 10px;
    position: relative;
    width: 100px;
    height: 55px;
    border-radius: var(--border-radius-10);
    border: 4px solid #4360d2;
    filter: invert(-50%);
    cursor: pointer;

    &:hover {
      background-color: #2b2bb9;

      & svg {
        & path {
          stroke: white;
        }
      }
    }

    &:active {
      background-color: rgb(86, 86, 220);

      & svg {
        width: 100%;
      }
    }

    & svg {
      height: 100%;
      width: 50px;
    }

  }
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;

  & ul {
    display: grid;
    gap: ${props => props.hide ? '10px' : '0'};
    transition: gap .6s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
    border: none;
    width: 50px;
    height: 60px;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: transparent;
    gap: 5px;
    cursor: pointer;
    :hover > span {
      box-sizing: content-box;
      background-color: #2b2bb9;
      border: 2px solid white;
    }

    :active > span {
      background-color: white;
      border: 2px solid #2b2bb9;
    }
  }

  & span {
    width: 100%;
    height: 6px;
    background-color: white;
    border-radius: 4px;
  }
`