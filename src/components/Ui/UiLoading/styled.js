import styled from "styled-components";

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ShadowImg = styled(Img)`
  filter: drop-shadow(0 0 10px black);
`;
