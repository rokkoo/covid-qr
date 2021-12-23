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

interface QRDataState {
  qrData: QRData[];
  addQRData: (qrData: QRData) => void;
  removeQRData: (qrData: QRData) => void;
}

type Persist = (
  config: StateCreator<QRDataState>,
  options: PersistOptions<QRDataState>
) => StateCreator<QRDataState>;

export const useQrStore = create<QRDataState>(
  (persist as Persist)(
    (set) => ({
      qrData: [],
      addQRData: (qrData: QRData) => {
        set((state) => ({
          qrData: [...state.qrData, qrData],
        }));
      },
      removeQRData: (qrData: QRData) => {
        set((state) => ({
          qrData: state.qrData.filter((data) => data !== qrData),
        }));
      },
    }),
    {
      name: PERSIST_KEY,
      getStorage: () => AsyncStorage,
    }
  )
);
