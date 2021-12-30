import React from 'react';
import { Box, FlatList } from 'native-base';
import { useQrStore } from '../../../../store/qr';
import Header from './header';
import Item from './Item';

interface Props {}

const Lis: React.FC<Props> = () => {
  const qrList = useQrStore((state) => state.qrList);

  return (
    <Box>
      <Header />
      <FlatList data={qrList} renderItem={({ item }) => <Item item={item} />} />
    </Box>
  );
};

export default Lis;
