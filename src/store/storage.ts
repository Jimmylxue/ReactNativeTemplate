/**
 * react-native-mmkv 提供非常好用的hooks - useMMKVString - useMMKVNumber - useMMKVBoolean
 * https://github.com/mrousavy/react-native-mmkv
 */
import {MMKV} from 'react-native-mmkv';
import type {StateStorage} from 'zustand/middleware';

export const storage = new MMKV();

export const AUTH_TOKEN_NAME = 'snow_token';
export const AUTH_USER = 'snow_user';

export const AUTH_USER_Phone = 'snow_user_phone';
export const AUTH_USER_Password = 'snow_user_password';

export function getItem<T>(key: string): T {
  const value = storage.getString(key);

  return value ? JSON.parse(value) || null : null;
}

export function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  storage.delete(key);
}

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);

    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};
