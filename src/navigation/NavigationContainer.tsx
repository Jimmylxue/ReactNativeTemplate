import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './navigate';

export const NavigationContainer = ({children}: any) => {
  return (
    <SafeAreaProvider>
      <RNNavigationContainer
        ref={navigationRef}
        fallback={
          <View className="h-full items-center justify-center gap-y-2">
            <Text>加载中...</Text>
          </View>
        }
        onReady={() => {}}
        onStateChange={async () => {}}>
        {children}
      </RNNavigationContainer>
    </SafeAreaProvider>
  );
};
