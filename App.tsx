import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { BottomContainer, Container, Result, TopContainer } from './src/components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <TopContainer>
          <Result value={0} />
        </TopContainer>

        <BottomContainer>
          <Container flex={3}>
            <Container flex={3}></Container>
            <Container></Container>
          </Container>

          <Container></Container>
        </BottomContainer>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
