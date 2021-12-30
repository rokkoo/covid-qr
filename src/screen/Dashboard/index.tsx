import { Box, FlatList } from 'native-base';

import DashboardHeader from './components/DashboardHeader';
import CertificateListItem from './components/CertificateListItem';
import { useQrStore } from '../../store/qr';

const Dashboard = () => {
  const qrList = useQrStore((state) => state.qrList);

  return (
    <Box safeArea h="full" bg="warmGray.100" px={4} pt={4}>
      <FlatList
        data={qrList}
        ListHeaderComponent={<DashboardHeader />}
        renderItem={({ item }) => <CertificateListItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default Dashboard;
