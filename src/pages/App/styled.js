import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: var(--max-width);
  margin: auto;
  padding: var(--spacing-large) 0;
  @media screen and (max-width: 1400px) {
    padding: var(--spacing-large);
  }
  @media screen and (max-width: 480px) {
    padding: var(--spacing-medium);
  }
`;