import { FC, memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

interface IStyledPressable {
  width: number;
  height: number;
  isPress: boolean;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ theme, width, height, isPress }) => ({
  width,
  height,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isPress ? theme.colors.zinc[700] : theme.colors.zinc[500],
}));

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 48,
  color: theme.colors.white,
}));

interface IButton {
  width: number;
  height: number;
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ width, height, title, onPress }) => {
  const [isPress, setIsPress] = useState(false);

  const onPressIn = useCallback(() => {
    setIsPress(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPress(false);

    onPress();
  }, []);

  return (
    <StyledPressable
      width={width}
      height={height}
      isPress={isPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
