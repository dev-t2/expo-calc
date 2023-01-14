import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { ButtonContainer, Container, Result, ResultContainer } from './src/components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <ResultContainer>
          <Result value={0} />
        </ResultContainer>

        <ButtonContainer></ButtonContainer>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
