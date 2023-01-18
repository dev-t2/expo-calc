import { memo, useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import {
  Button,
  Container,
  NumberPad,
  Pad,
  Result,
  RowContainer,
  TopContainer,
} from './src/components';

const App = () => {
  const { width } = useWindowDimensions();

  const [result, setResult] = useState(0);

  const onPressNumber = useCallback(
    (number: number) => () => {
      setResult((prevState) => prevState * 10 + number);
    },
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <TopContainer>
          <Result value={`${result}`} />
        </TopContainer>

        <Pad>
          <Container flex={3}>
            <NumberPad>
              {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => (
                <Button
                  key={number}
                  width={(width - 2) / 4}
                  height={(width - 2) / 4}
                  title={`${number}`}
                  onPress={onPressNumber(number)}
                />
              ))}
            </NumberPad>

            <RowContainer>
              <Button
                width={(width - 2) / 2}
                height={(width - 2) / 4}
                title="0"
                onPress={onPressNumber(0)}
              />

              <Button type="operator" width={(width - 2) / 4} height={(width - 2) / 4} title="=" />
            </RowContainer>
          </Container>

          <Container>
            <Button type="operator" width={(width - 2) / 4} height={(width - 2) / 4} title="C" />

            <Button type="operator" width={(width - 2) / 4} height={(width - 2) / 4} title="-" />

            <Button type="operator" width={(width - 2) / 4} height={(width - 2) / 2} title="+" />
          </Container>
        </Pad>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
