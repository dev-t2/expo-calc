import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  backgroundColor: theme.colors.black,
}));

interface ITopContainer {
  children: ReactNode;
}

const TopContainer: FC<ITopContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(TopContainer);
