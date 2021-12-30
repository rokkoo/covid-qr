import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type StackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

const useAppNavaigation = () => {
  const navigation = useNavigation<StackNavigationProp>();

  return { ...navigation };
};

export default useAppNavaigation;
