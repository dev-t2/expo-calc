import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'row',
  padding: 1,
});

interface IPad {
  children: ReactNode;
}

const Pad: FC<IPad> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(Pad);
