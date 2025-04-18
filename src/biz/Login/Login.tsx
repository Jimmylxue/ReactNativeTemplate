import NButton from '@components/Button/Button';
import {Input} from '@components/Input';
import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {NIcon} from '@components/Icon/NIcon';
import {useLoginApi} from '@api/login/useLogin';
type TProps = {
  changePage: React.Dispatch<
    React.SetStateAction<'start' | 'login' | 'register'>
  >;
};

export const Login = ({changePage}: TProps) => {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {login} = useLoginApi();

  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
  }, [opacity]);

  return (
    <Animated.View style={[animatedStyle]}>
      <View className=" mt-[70] px-4">
        <NIcon
          iconType="EvilIcons"
          name="chevron-left"
          color="#000"
          size={50}
          onPress={() => {
            changePage('start');
          }}
        />
        <Image
          source={require('@assets/images/talk.png')}
          className="w-[200] h-[200] self-center"
        />
        <View className=" px-4">
          <View className=" mt-1 ">
            <Text className="  text-3xl">登录</Text>
            <Text className=" text-gray-500 text-ls mt-2">
              请输入您的账号和密码
            </Text>
          </View>
          <View className=" mt-10">
            <Input
              className="color-black"
              title="ID"
              placeholder="请输入ID"
              value={phone}
              onChangeText={val => {
                setPhone(val);
              }}
            />
          </View>
          <View className=" mt-10">
            <Input
              className="color-black"
              title="密码"
              secureTextEntry
              autoComplete="password"
              textContentType="password"
              placeholder="请输入密码"
              value={password}
              onChangeText={val => setPassword(val)}
            />
          </View>
          <View className=" justify-center flex-row relative ">
            <NButton
              theme="primary"
              className=" mt-20 rounded-3xl w-[270]"
              onPress={async () => {
                await login({
                  id: phone,
                  password,
                  noEncrypt: true,
                });
              }}>
              登录
            </NButton>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
