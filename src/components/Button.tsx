import { FC, memo } from 'react';
import styled from '@emotion/native';

interface IStyledPressable {
  width: number;
  height: number;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ theme, width, height }) => ({
  width,
  height,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.zinc[500],
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
  return (
    <StyledPressable width={width} height={height} onPressOut={onPress}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
