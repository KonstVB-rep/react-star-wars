import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  max-width: 300px;
  margin: ${(props) => props.className ? '30px 0 30px 0' : ''};
  & img{
    position: absolute;
    object-fit: cover;
    right: 4px;
    top: 2px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display:  ${(props) => props.value ? 'block' : 'none'};
  }
`


export const Input = styled.input`
  width:100%;
  padding: 10px 45px 10px 15px;
  border: 3px solid;
  border-color: var(--color-lifgtgrey);
  border-radius:  var(--border-radius-10);
  font-size: var(--font-size-main);
  outline: none;
  &:hover{
    border-color: var(--color-yellow);
  }
`