import { FC, memo } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 56,
  fontWeight: '700',
  color: theme.colors.white,
  paddingVertical: 16,
  paddingHorizontal: 32,
}));

interface IResult {
  value: number;
}

const Result: FC<IResult> = ({ value }) => {
  return <StyledText>{value}</StyledText>;
};

export default memo(Result);
