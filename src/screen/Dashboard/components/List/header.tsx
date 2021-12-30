import React from 'react';
import { Box, Heading, HStack, Pressable, Spacer } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface IProps {
  handleCreateNewList: () => void;
}

const Header: React.FC<IProps> = ({ handleCreateNewList }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Heading color="dark.50" fontSize="3xl" p="4" pb="3">
        Tus Listas
      </Heading>
      <Pressable onPress={handleCreateNewList}>
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
