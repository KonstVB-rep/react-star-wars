import styled from "styled-components";

export const Div = styled.div`
  position: relative;
`;

export const ImgPerson = styled.img`
  border-radius: var(--border-radius-10);
  filter: drop-shadow(0px 0px 5px var(--color-white));
  border: 2px solid var(--color-white);
`;

export const FavoriteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 10px;
  width: 64px;
  height: 64px;
  filter: drop-shadow(0px 0px 2px var(--color-black));
  cursor: pointer;
`;
