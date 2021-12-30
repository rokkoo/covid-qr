import { Box, Spacer } from 'native-base';
import OwnCertificateSection from '../OwnCertificateSection';
import Header from './header';

const DashboardHeader = () => {
  return (
    <Box>
      <OwnCertificateSection />
      <Spacer my="4" />
      <Header />
      <Spacer my="2" />
    </Box>
  );
};

export default DashboardHeader;
