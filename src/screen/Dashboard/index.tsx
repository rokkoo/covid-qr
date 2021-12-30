import { Box } from 'native-base';

import BottonSheet from './components/BottomSheet';
import useDashboard from './useDashboard';
import List from './components/List';
import OwnCertificateSection from './components/OwnCertificateSection';

const Dashboard = () => {
  return (
    <Box safeArea h="full" bg="dark.900" px={4} pt={4}>
      <OwnCertificateSection />
      <List />
    </Box>
  );
};

export default Dashboard;
