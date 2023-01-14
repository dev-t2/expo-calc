import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'row',
});

interface IRowContainer {
  children: ReactNode;
}

const RowContainer: FC<IRowContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(RowContainer);
