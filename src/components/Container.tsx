import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IStyledView {
  flex: number;
}

const StyledView = styled.View<IStyledView>(({ theme, flex }) => ({
  flex,
  backgroundColor: theme.colors.white,
}));

interface IContainer {
  children: ReactNode;
  flex?: number;
}

const Container: FC<IContainer> = ({ children, flex = 1 }) => {
  return <StyledView flex={flex}>{children}</StyledView>;
};

export default memo(Container);
