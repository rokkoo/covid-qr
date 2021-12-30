import React from 'react';
import { Box, Heading, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import useAppNavaigation from '../../../../hooks/useAppNavaigation';
import Pressable from '../../../../components/Pressable';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const navigation = useAppNavaigation();

  const handleNaviagteToCreateNewList = () => {
    navigation.navigate('CreateNewList');
  };

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Heading color="blue.600" fontSize="3xl">
        Tus Listas
      </Heading>
      <Pressable onPress={handleNaviagteToCreateNewList}>
        <Box mr={2}>
          <AntDesign name="addfolder" size={24} color="black" />
        </Box>
      </Pressable>
    </HStack>
  );
};

export default React.memo(Header);
