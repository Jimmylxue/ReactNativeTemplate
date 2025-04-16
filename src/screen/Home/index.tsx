import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-red-400">
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
