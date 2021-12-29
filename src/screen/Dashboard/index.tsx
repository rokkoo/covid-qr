import { Button } from 'react-native';
import { Box, Heading } from 'native-base';

import BottonSheet from './components/BottomSheet';
import useDashboard from './useDashboard';
import List from './components/List';
import OwnCertificateSection from './components/OwnCertificateSection';

const Dashboard = () => {
  const { handleCreateNewList, bottomSheetRef, handleCreateNewListConfirm } =
    useDashboard();

  return (
    <Box safeArea h="full" bg="dark.900" px={4} pt={4}>
      <OwnCertificateSection />
      <Heading color="dark.50" fontSize="3xl" p="4" pb="3">
        Tus Listas
      </Heading>
      <Button onPress={handleCreateNewList} title="Crear nueva lista" />
      <List />

      <BottonSheet
        bottomSheetRef={bottomSheetRef}
        handleConfirm={handleCreateNewListConfirm}
      />
    </Box>
  );
};

export default Dashboard;
