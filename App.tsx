import { memo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { Button, Container, Text } from './src/components';

const App = () => {
  const [result, setResult] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />

        <Text text={result} />

        <Button
          type="operator"
          title="+"
          onPress={() => {
            setResult((prev) => prev + 1);
          }}
        />

        <Button
          type="operator"
          title="-"
          onPress={() => {
            setResult((prev) => prev - 1);
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
