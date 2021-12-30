import React from 'react';
import { Box, HStack, Text, Badge } from 'native-base';
import { QRList } from '../../../../store/qr';

interface Props {
  item: QRList;
}

const CertificateListItem: React.FC<Props> = ({ item }) => {
  return (
    <Box pl="2" pr="2" py="2">
      <HStack
        justifyContent="space-between"
        backgroundColor="white"
        p="4"
        borderRadius="xl"
      >
        <Text
          _dark={{
            color: 'warmGray.50',
          }}
          color="trueGray.900"
          bold
          fontSize="xl"
        >
          {item.name}
        </Text>
        <Badge colorScheme="success" rounded="6" px="3">
          <Text
            fontSize="xl"
            _dark={{
              color: 'warmGray.50',
            }}
            color="trueGray.900"
            alignSelf="flex-start"
          >
            {item.list.length}
          </Text>
        </Badge>
      </HStack>
    </Box>
  );
};

export default React.memo(CertificateListItem);
