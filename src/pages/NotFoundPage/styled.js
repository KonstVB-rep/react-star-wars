import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const InnerDiv = styled.div`
  position: absolute;
  padding: 40px 20px;
  width: 100%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  flex-wrap: wrap;
  font-size: var(--font-size-50);
  color: white;
  text-shadow: 0px -20px 25px #e94343;
  text-align: center;
  word-break: break-word;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
