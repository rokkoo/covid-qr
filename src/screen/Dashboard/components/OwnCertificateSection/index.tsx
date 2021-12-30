import React, { useMemo } from 'react';
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

  const certificateQRCode = useMemo(() => 'http://awesome.link.qr', []);

  return (
    <Box>
      <Heading color="blue.600" fontSize="4xl" pb="4">
        Tu certificado
      </Heading>
      <HStack bgColor="white" rounded="xl" shadow="1">
        <Box
          bg={{
            linearGradient: {
              colors: ['purple.900', 'purple.500', 'blue.800'],
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
            <Box backgroundColor="white" p="3" borderRadius="8">
              <QRCode value={certificateQRCode} size={width / 3} />
            </Box>
          </Pressable>
        </Box>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <AntDesign name="filetext1" size={width / 8} color="#171717" />
        </Box>
      </HStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box mt={4} p="3" backgroundColor="white" borderRadius="8">
            <QRCode value={certificateQRCode} size={width / 1.5} />
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default React.memo(OwnCertificateSection);
