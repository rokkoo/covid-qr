import { FlatList } from 'native-base';
import { useQrStore } from '../../../../store/qr';
import Item from './Item';

const Lis = () => {
  const qrList = useQrStore((state) => state.qrList);

  return (
    <FlatList data={qrList} renderItem={({ item }) => <Item item={item} />} />
  );
};

export default Lis;
