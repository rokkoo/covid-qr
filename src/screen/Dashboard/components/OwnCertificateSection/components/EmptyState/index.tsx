import React from 'react';
import { Box, HStack, Pressable, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const EmptyState = () => {
  return (
    <Box width="100%" justifyContent="center" alignItems="center">
      <Pressable onPress={() => console.log('empty state')}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              backgroundColor="blue.700"
              borderRadius="16"
              borderWidth="1"
              borderColor="trueGray.100"
              justifyContent="center"
              alignItems="center"
              py="4"
              px="9"
              style={{
                opacity: isHovered || isFocused || isPressed ? 0.4 : 1,
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >
              <HStack justifyContent="center" alignItems="center">
                <Box
                  mr="4"
                  px="4"
                  py="2"
                  justifyContent="center"
                  backgroundColor="rgba(240, 249, 255, 0.31)"
                  borderRadius="10"
                >
                  <AntDesign name="addfile" size={24} color="white" />
                </Box>
                <Text color="lightBlue.100" fontSize="xl">
                  Agregar tú certificado
                </Text>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};

export default EmptyState;
