import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, Heading, HStack, Icon } from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import { AntDesign } from '@expo/vector-icons';

const OwnCertificateSection = () => {
  const { width } = useWindowDimensions();
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
          <QRCode value="http://awesome.link.qr" size={width / 3} />
        </Box>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <AntDesign name="filetext1" size={width / 8} color="black" />
        </Box>
      </HStack>
    </Box>
  );
};

export default React.memo(OwnCertificateSection);
