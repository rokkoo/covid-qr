import { useCallback, useRef } from 'react';
import { useQrStore } from '../../store/qr';
import bottomSheet from '@gorhom/bottom-sheet';

const useDashboard = () => {
  const { createNewList } = useQrStore();
  const bottomSheetRef = useRef<bottomSheet>(null);

  const handleCreateNewList = useCallback(async () => {
    // createNewList('testxd');
    bottomSheetRef?.current?.expand();
  }, []);

  const handleCreateNewListConfirm = useCallback((name: string) => {
    createNewList(name);
    bottomSheetRef?.current?.collapse();
  }, []);

  return { handleCreateNewList, bottomSheetRef, handleCreateNewListConfirm };
};

export default useDashboard;
