import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PERSIST_KEY = '@qr-data';

interface Name {
  fn: string; // last name
  gn: string; // first name
}

interface QRData {
  dob: string; // birth date
  nam: Name;
}

interface QRInfo {
  code: string;
  file: string;
}

export interface QRList {
  id: string;
  name: string;
  list: QRInfo[];
}

interface QRDataState {
  qrList: QRList[];
  addQRData: (id: string, qrData: QRInfo) => void;
  createNewList: (name: string) => void;
  removeQRData: (id: string) => void;
  removeAllQRData: () => Promise<void>;
}

type Persist = (
  config: StateCreator<QRDataState>,
  options: PersistOptions<QRDataState>
) => StateCreator<QRDataState>;

export const useQrStore = create<QRDataState>(
  (persist as Persist)(
    (set) => ({
      qrList: [],
      addQRData: (id: string, qrInfo: QRInfo) => {
        set((state) => {
          const qrList = state.qrList.find((list) => list.id === id);

          if (qrList) {
            const exist = qrList.list.find((item) => item.code === qrInfo.code);

            if (!exist) {
              qrList.list = [...qrList.list, qrInfo];

              return { qrList: [...state.qrList, qrList] };
            }
          }

          throw new Error('not found');
        });
      },
      createNewList: (name: string) => {
        set((state) => {
          // TODO: use uuid
          const id = `${Date.now()}`;

          const qrList = {
            id,
            name,
            list: [],
          };

          return { qrList: [...state.qrList, qrList] };
        });
      },
      removeQRData: (id: string) => {
        set((state) => {
          const list = state.qrList.filter((list) => list.id !== id);

          return { qrList: [...list] };
        });
      },
      removeAllQRData: async () => {
        await AsyncStorage.clear();
      },
    }),
    {
      name: PERSIST_KEY,
      getStorage: () => AsyncStorage,
    }
  )
);
