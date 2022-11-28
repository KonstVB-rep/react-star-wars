import styled from 'styled-components';

export const Div = styled.div`
  width: 90%;
  margin: 10px auto;
  color: black;
  text-align: center;
  font-size: var(--font-size-50);
  line-height: 1.7;
  text-shadow: 0 2px 0 var(color-light-green);
  -webkit-text-stroke-color: var(color-light-green);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-fill-color: white;
  border-radius: 20px;
  padding: var(--spacing-large);
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 740px){
    padding: var(--spacing-small);
    & p{
      font-size: 36px;
    }
  }

  @media screen and (max-width: 480px){
    padding: var(--spacing-small);
    
    & p{
      font-size: var(--font-size-header);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }

  & p::selection {
    text-shadow: 5px 5px #c71111;
    background-color: #cb63e8;
  }
  & .video {
    width: 100%;
    max-width: 600px;
    min-width: 200px;
    margin: 40px 0 0;
    border-radius: calc(var(--border-radius-10) * 2);
    filter: drop-shadow(-2px -2px 30px white);
  }
`;
