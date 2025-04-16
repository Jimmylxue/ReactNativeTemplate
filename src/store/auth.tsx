import {TUser} from '@api/login';
import {storage, zustandStorage} from '@store/storage';
import Toast from 'react-native-toast-message';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

type AuthState = {
  user?: TUser;
  token?: string;
  signIn: (_user: TUser, _token: string) => void;
  signOut: () => void;
  updateUser: (_user: TUser) => void;
};

/**
 * 必须 hooks 的方式调用 才会触发页面响应式更新
 * const {token} = useAuth()
 */

export const useAuth = create<AuthState, [['zustand/persist', AuthState]]>(
  persist(
    (set, _get) => ({
      user: undefined,
      token: undefined,
      signIn: (_user, _token) => {
        set({user: _user, token: _token});
      },
      signOut: () => {
        Toast.show({
          text1: '退出...',
          type: 'info',
        });
        set({
          user: undefined,
          token: undefined,
        });
        storage.clearAll();
      },
      updateUser: _user => {
        set({user: _user});
      },
    }),
    {
      name: 'APP_USER',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export const {user, token} = useAuth.getState();
