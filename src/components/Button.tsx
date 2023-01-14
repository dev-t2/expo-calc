import { FC, memo, useCallback, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IStyledPressable {
  width: number;
  height: number;
  backgroundColor: string;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ width, height, backgroundColor }) => {
  return {
    width,
    height,
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
  width?: number;
  height?: number;
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ type = 'number', width = 100, height = 100, title, onPress }) => {
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
    <StyledPressable
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
