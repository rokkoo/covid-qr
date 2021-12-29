import { useCallback } from 'react';
import { Button, Text, View } from 'react-native';

import BottonSheet from './components/BottomSheet';
import useDashboard from './useDashboard';
import { useQrStore } from '../../store/qr';

const Dashboard = () => {
  const qrList = useQrStore((state) => state.qrList);
  const { handleCreateNewList, bottomSheetRef, handleCreateNewListConfirm } =
    useDashboard();

  const renderQrList = useCallback(() => {
    return qrList.map((qr) => {
      return (
        <View style={{ backgroundColor: 'yellow' }} key={qr.id}>
          <Text>{qr.name}</Text>
        </View>
      );
    });
  }, [qrList]);

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>List</Text>
      <Button onPress={handleCreateNewList} title="Crear nueva lista" />
      {renderQrList()}

      <BottonSheet
        bottomSheetRef={bottomSheetRef}
        handleConfirm={handleCreateNewListConfirm}
      />
    </View>
  );
};

export default Dashboard;
