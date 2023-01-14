import { memo } from 'react';
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

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <TopContainer>
          <Result value={0} />
        </TopContainer>

        <Pad>
          <Container flex={3}>
            <NumberPad>
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="9" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="8" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="7" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="6" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="5" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="4" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="3" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="2" />
              <Button width={(width - 2) / 4} height={(width - 2) / 4} title="1" />
            </NumberPad>

            <RowContainer>
              <Button width={(width - 2) / 2} height={(width - 2) / 4} title="0" />
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
