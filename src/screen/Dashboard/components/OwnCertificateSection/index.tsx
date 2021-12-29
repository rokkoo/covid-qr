import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Text,
  useDisclose,
} from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import { AntDesign } from '@expo/vector-icons';

const OwnCertificateSection = () => {
  const { width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Box shadow="2">
      <Heading color="dark.50" fontSize="4xl" pb="6">
        Tu certificado
      </Heading>
      <HStack bgColor="white" rounded="xl">
        <Box
          bg={{
            linearGradient: {
              colors: ['blue.600', 'blue.400'],
              start: [0, 1],
              end: [1, 0],
            },
          }}
          p="12"
          rounded="xl"
          _text={{
            fontSize: '2xl',
            fontWeight: 'medium',
            color: 'dark.900',
            textAlign: 'center',
          }}
        >
          <Pressable onPress={() => onOpen()}>
            <QRCode value="http://awesome.link.qr" size={width / 3} />
          </Pressable>
        </Box>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <AntDesign name="filetext1" size={width / 8} color="black" />
        </Box>
      </HStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box pt={4}>
            <QRCode value="http://awesome.link.qr" size={width / 1.5} />
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default React.memo(OwnCertificateSection);
