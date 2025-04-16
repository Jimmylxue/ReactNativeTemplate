import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StatusBar} from 'react-native';
import {Mine} from '@screen/Mine';
import {Home} from '@screen/Home';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView className=" h-screen">
        <Tab.Navigator
          screenOptions={({}) => ({
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarStyle: {
              height: 75,
              paddingBottom: 10, // 控制内部内容的间距
            },
          })}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: '首页',
            }}
            component={Home}
          />
          <Tab.Screen
            name="Mine"
            options={{
              tabBarLabel: '我的',
            }}
            component={Mine}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};
