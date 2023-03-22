import styled from "styled-components";

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 250px;
`;

export const ShadowImg = styled(Img)`
  filter: drop-shadow(0 0 10px black);
`;
