import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledView = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default memo(Container);
