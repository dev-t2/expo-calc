import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
});

interface IBottomContainer {
  children: ReactNode;
}

const BottomContainer: FC<IBottomContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(BottomContainer);
