import styled from "styled-components";

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoBox = styled.div`
  width: 100%;
  --color-name: var(--color-violet);
  & .person-info {
    display: grid;
    color: var(--color-white);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    text-shadow: 0 0 5px black;
    padding: var(--spacing-medium);
    border-left: 5px solid var(--color-name);
    border-bottom-left-radius: 20px;
  }
`;

export const SpanPersonName = styled.span`
  background-color: var(--color-name);
  padding: var(--spacing-small);
  font-size: var(--font-size-18);
  font-weight: var(--font-bold);
  color: var(--color-white);
  border-radius: var(--border-radius-5);
`;
