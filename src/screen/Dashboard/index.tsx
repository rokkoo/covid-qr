import { Text, View } from 'react-native';

import { useQrStore } from '../../store/qr';

const Dashboard = () => {
  const qrData = useQrStore((state) => state.qrData);

  return (
    <View style={{ flex: 1 }}>
      <Text>List</Text>
    </View>
  );
};

export default Dashboard;
