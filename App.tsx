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
  const [formula, setFormula] = useState<(number | string)[]>([]);

  const onPressNumber = useCallback(
    (number: number) => () => {
      const lastFormula = formula[formula.length - 1];

      if (typeof lastFormula === 'string') {
        setResult(number);
        setFormula((prevState) => [...prevState, number]);
      } else {
        const newNumber = (lastFormula ?? 0) * 10 + number;

        setResult(newNumber);
        setFormula((prevState) => {
          prevState.pop();

          return [...prevState, newNumber];
        });
      }
    },
    [formula]
  );

  const onPressOperator = useCallback(
    (operator: string) => () => {
      if (operator === 'C') {
        setResult(0);
        setFormula([]);
      } else if (operator === '=') {
        let result = 0;
        let operator = '';

        formula.forEach((value) => {
          if (['+', '-'].includes(`${value}`)) {
            operator = `${value}`;
          } else {
            if (operator === '+') {
              result = result + Number(value);
            } else if (operator === '-') {
              result = result - Number(value);
            } else {
              result = Number(value);
            }
          }
        });

        setResult(result);
        setFormula([]);
      } else {
        const lastFormula = formula[formula.length - 1];

        if (['+', '-'].includes(`${lastFormula}`)) {
          setFormula((prevState) => {
            prevState.pop();

            return [...prevState, operator];
          });
        } else {
          setFormula((prevState) => {
            return [...prevState, operator];
          });
        }
      }
    },
    [formula]
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

              <Button
                type="operator"
                width={(width - 2) / 4}
                height={(width - 2) / 4}
                title="="
                onPress={onPressOperator('=')}
              />
            </RowContainer>
          </Container>

          <Container>
            <Button
              type="operator"
              width={(width - 2) / 4}
              height={(width - 2) / 4}
              title="C"
              onPress={onPressOperator('C')}
            />

            <Button
              type="operator"
              width={(width - 2) / 4}
              height={(width - 2) / 4}
              title="-"
              onPress={onPressOperator('-')}
            />

            <Button
              type="operator"
              width={(width - 2) / 4}
              height={(width - 2) / 2}
              title="+"
              onPress={onPressOperator('+')}
            />
          </Container>
        </Pad>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
