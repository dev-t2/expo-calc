import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flex: 3,
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  backgroundColor: theme.colors.white,
}));

interface INumberPad {
  children: ReactNode;
}

const NumberPad: FC<INumberPad> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(NumberPad);
