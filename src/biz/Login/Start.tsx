import NButton from '@components/Button/Button';
import {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import RNRestart from 'react-native-restart';
import {HelloWave} from '@components/HelloWave';

type TProps = {
  changePage: React.Dispatch<
    React.SetStateAction<'start' | 'login' | 'register'>
  >;
};

export const StartIndex = ({changePage}: TProps) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
  }, [opacity]);

  useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = () => {
    Toast.show({
      text1: '检查更新中....',
      type: 'info',
    });
    codePush.checkForUpdate().then(update => {
      if (update) {
        codePush
          .sync({
            updateDialog: {
              appendReleaseDescription: false,
              descriptionPrefix: '\n\n更新内容：\n',
              title: '发现新版本',
              mandatoryUpdateMessage: '更新内容：\n' + update.description,
              mandatoryContinueButtonLabel: '确定',
            },
          })
          .then(status => {
            if (status === codePush.SyncStatus.UPDATE_INSTALLED) {
              Toast.show({
                text1: '更新成功，即将重新启动',
                type: 'success',
              });
              setTimeout(() => {
                RNRestart.restart();
              }, 1500);
            }
          });
      }
    });
  };

  return (
    <Animated.View style={[animatedStyle]} className="h-full">
      <View className="h-full">
        <View className=" justify-center flex-row mt-[180]">
          <Image
            className=" size-[200]"
            source={require('@src/assets/images/talk.png')}
          />
        </View>

        <View className="  mb-5 mt-10">
          <View className="flex-row justify-center items-center">
            <Text className=" text-white text-3xl font-semibold bg-red-300">
              Hello !
            </Text>
            <HelloWave />
          </View>
          <View className="px-10 justify-center mt-5">
            <Text className=" text-gray-500 text-lg text-center">
              Wish can be a good companion on your growth journey.
            </Text>
          </View>
        </View>

        <View className="absolute bottom-40 w-full flex-row justify-center">
          <NButton
            theme="primary"
            className=" rounded-lg w-[270]"
            onPress={() => {
              changePage('login');
            }}>
            SIGN IN
          </NButton>
        </View>

        <View className="absolute bottom-20 w-full flex-row justify-center">
          <NButton
            theme="primary"
            className=" rounded-lg w-[270]"
            onPress={() => {
              changePage('register');
            }}>
            SIGN UP
          </NButton>
        </View>

        <View className=" absolute bottom-10 w-full">
          <Text className=" text-white text-sm text-center">
            design by jimmy
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};
