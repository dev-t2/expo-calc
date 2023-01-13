import { FC, memo } from 'react';
import { View } from 'react-native';

interface IButton {
  title: string;
  color: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ title }) => {
  return <View>{title}</View>;
};

export default memo(Button);
