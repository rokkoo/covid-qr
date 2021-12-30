import { useCallback, useState } from 'react';
import useAppNavaigation from '../../hooks/useAppNavaigation';
import { useQrStore } from '../../store/qr';

const useCreateNewList = () => {
  const [listName, setListName] = useState('');
  const [isValisListName, setIsValisListName] = useState(true);

  const { createNewList } = useQrStore();
  const navigation = useAppNavaigation();

  const handleCreateNewListConfirm = useCallback(() => {
    if (listName.length <= 0) {
      setIsValisListName(false);
      return;
    }

    createNewList(listName);
    navigation.navigate('Dashboard');
  }, [listName]);

  const handleChangeName = useCallback((text: string) => {
    if (text.length > 0) {
      setIsValisListName(true);
    }

    setListName(text);
  }, []);

  const handleDissmiss = useCallback(() => {
    navigation.navigate('Dashboard');
  }, []);

  return {
    handleCreateNewListConfirm,
    listName,
    isValisListName,
    handleChangeName,
    handleDissmiss,
  };
};

export default useCreateNewList;
