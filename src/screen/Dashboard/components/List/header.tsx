import React from 'react';
import { Box, Heading, HStack, Pressable } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import useAppNavaigation from '../../../../hooks/useAppNavaigation';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const navigation = useAppNavaigation();

  const handleNaviagteToCreateNewList = () => {
    navigation.navigate('CreateNewList');
  };

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Heading color="dark.50" fontSize="3xl" p="4" pb="3">
        Tus Listas
      </Heading>
      <Pressable onPress={handleNaviagteToCreateNewList}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              mr={2}
              style={{
                opacity: isHovered || isFocused || isPressed ? 0.4 : 1,
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >
              <AntDesign name="addfolder" size={24} color="black" />
            </Box>
          );
        }}
      </Pressable>
    </HStack>
  );
};

export default Header;
