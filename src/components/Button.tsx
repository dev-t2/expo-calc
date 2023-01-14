import { FC, memo, useCallback, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IStyledView {
  width: number;
  height: number;
}

const Container = styled.View<IStyledView>(({ width, height }) => ({
  width,
  height,
  padding: 1,
}));

interface IStyledPressable {
  backgroundColor: string;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ backgroundColor }) => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  };
});

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 48,
  color: theme.colors.white,
}));

interface IButton {
  type?: 'number' | 'operator';
  width: number;
  height: number;
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ type = 'number', width, height, title, onPress }) => {
  const theme = useTheme();

  const [backgroundColor, setBackgroundColor] = useState(() => {
    return type === 'number' ? theme.colors.zinc[500] : theme.colors.amber[500];
  });

  const onPressIn = useCallback(() => {
    setBackgroundColor(() => {
      return type === 'number' ? theme.colors.zinc[700] : theme.colors.amber[700];
    });
  }, [type, theme.colors.zinc, theme.colors.amber]);

  const onPressOut = useCallback(() => {
    setBackgroundColor(() => {
      return type === 'number' ? theme.colors.zinc[500] : theme.colors.amber[500];
    });

    onPress();
  }, [type, theme.colors.zinc, theme.colors.amber, onPress]);

  return (
    <Container width={width} height={height}>
      <StyledPressable
        backgroundColor={backgroundColor}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <StyledText>{title}</StyledText>
      </StyledPressable>
    </Container>
  );
};

export default memo(Button);
