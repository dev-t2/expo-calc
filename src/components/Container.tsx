import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledView = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default memo(Container);
