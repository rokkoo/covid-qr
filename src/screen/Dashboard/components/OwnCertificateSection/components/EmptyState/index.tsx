import React from 'react';
import { Box, HStack, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import Pressable from '../../../../../../components/Pressable';

const EmptyState = () => {
  return (
    <Box width="100%" justifyContent="center" alignItems="center">
      <Pressable onPress={() => console.log('empty state2')}>
        <Box
          // backgroundColor="blue.700"
          borderRadius="16"
          borderWidth="1"
          borderColor="trueGray.100"
          justifyContent="center"
          alignItems="center"
          bg={{
            linearGradient: {
              colors: ['blue.900', 'purple.500', 'blue.800'],
              start: [0, 1],
              end: [1, 0],
            },
          }}
          py="4"
          px="9"
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
            <Text color="white" fontSize="xl">
              Agregar tú certificado
            </Text>
          </HStack>
        </Box>
        );
      </Pressable>
    </Box>
  );
};

export default EmptyState;
