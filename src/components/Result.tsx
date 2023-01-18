import { FC, memo, useMemo } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 56,
  fontWeight: '700',
  color: theme.colors.white,
  paddingVertical: 16,
  paddingHorizontal: 32,
}));

interface IResult {
  value: string;
}

const Result: FC<IResult> = ({ value }) => {
  const result = useMemo(() => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','), [value]);

  return <StyledText>{result}</StyledText>;
};

export default memo(Result);
