import React from 'react';
import { Box, HStack, VStack, Text, Spacer } from 'native-base';
import { QRList } from '../../../../store/qr';

interface Props {
  item: QRList;
}

const CertificateListItem: React.FC<Props> = ({ item }) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between">
        <VStack>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold
          >
            {item.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            {item.name}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: 'warmGray.50',
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          {item.id}
        </Text>
      </HStack>
    </Box>
  );
};

export default React.memo(CertificateListItem);
