import {View} from 'react-native';
import {Login} from '@biz/Login/Login';
import {useState} from 'react';
import {StartIndex} from '@biz/Login/Start';
import {Register} from '@biz/Login/Register';
export const LoginScreen = () => {
  const [currentPage, setCurrentPage] = useState<
    'start' | 'login' | 'register'
  >('start');

  console.log('currentPage', currentPage);

  return (
    <View className=" w-screen h-full ">
      {currentPage === 'start' && <StartIndex changePage={setCurrentPage} />}
      {currentPage === 'login' && <Login changePage={setCurrentPage} />}
      {currentPage === 'register' && <Register changePage={setCurrentPage} />}
    </View>
  );
};
