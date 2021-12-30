import React from 'react';
import { Box, FlatList } from 'native-base';
import { useQrStore } from '../../../../store/qr';
import Header from './header';
import Item from './Item';

interface Props {
  handleCreateNewList: () => void;
}

const Lis: React.FC<Props> = ({ handleCreateNewList }) => {
  const qrList = useQrStore((state) => state.qrList);

  return (
    <Box>
      <Header handleCreateNewList={handleCreateNewList} />
      <FlatList data={qrList} renderItem={({ item }) => <Item item={item} />} />
    </Box>
  );
};

export default Lis;
