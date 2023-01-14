import { FC, memo } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 56,
  fontWeight: '700',
});

interface IText {
  text: string | number;
}

const Text: FC<IText> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default memo(Text);
