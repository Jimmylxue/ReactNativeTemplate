import {
  TLoginResponse,
  TUser,
  TUserRegisterParams,
  useLogin,
  useLoginByMail,
  useRegister,
} from '@api/login';
import {useAuth} from '@store/auth';

import Toast from 'react-native-toast-message';

const loginSuccessCallback = async (res: TLoginResponse) => {
  Toast.show({
    type: 'success',
    text1: '登录成功',
    position: 'bottom',
    visibilityTime: 500,
  });
  useAuth.getState().signIn(res.user, res.token);
};

export function useLoginApi() {
  const {mutateAsync} = useLogin({
    onSuccess: loginSuccessCallback,
  });
  const {mutateAsync: registerFn} = useRegister({
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: '注册成功',
      });
    },
  });

  /**
   * 邮箱登录
   */
  const {mutateAsync: loginByMail} = useLoginByMail({
    onSuccess: loginSuccessCallback,
  });

  const login = async (params: {
    id: string;
    password: string;
    noEncrypt?: boolean;
  }) => {
    await mutateAsync({
      id: params.id,
      password: params.password,
      noEncrypt: params.noEncrypt,
    });
    // await setLoginPhone(params.id);
    // await setLoginPassword(params.password);
  };

  const register = async (params: TUserRegisterParams) => {
    await registerFn(params);
  };

  const updateUser = async (user: TUser) => {
    useAuth.getState().updateUser(user);
  };

  const logOut = async () => {
    useAuth.getState().signOut();
    Toast.show({type: 'info', text1: '已退出'});
  };

  return {
    login,
    register,
    updateUser,
    logOut,
    loginByMail,
  };
}
