import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
});

interface IButtonContainer {
  children: ReactNode;
}

const ButtonContainer: FC<IButtonContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(ButtonContainer);
