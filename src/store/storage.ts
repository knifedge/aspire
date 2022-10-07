import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';

export const storage = new MMKV();

export const storeAuth = (key: string, value: any) => {
  try {
    return storage.set(key, value.toString());
  } catch (e) {
    throw e;
  }
};

export const getAuth = (key: string) => {
  try {
    const value = storage.getString(key);
    if (value !== null) {
      return value;
    } else {
      return false;
    }
  } catch (e) {
    throw e;
  }
};

export const deleteAuth = (key: string = 'login') => {
  try {
    storage.delete(key);
    return;
  } catch (e) {
    throw e;
  }
};

export const purgeStore = () => {
  storage.clearAll();
  return Promise.resolve();
};

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
