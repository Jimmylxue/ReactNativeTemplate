import {useAuth} from '@store/auth';
import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

export const Mine = () => {
  // 模拟用户数据
  const user = {
    name: '张小明',
    email: 'xiaoming@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    membershipLevel: '黄金会员',
    points: 1280,
  };

  // 功能列表
  const features = [
    {icon: '📦', title: '我的订单', subtitle: '查看所有订单'},
    {icon: '❤️', title: '我的收藏', subtitle: '收藏的商品和店铺'},
    {icon: '📍', title: '收货地址', subtitle: '管理收货地址'},
    {icon: '💳', title: '支付方式', subtitle: '银行卡和支付设置'},
    {icon: '🎁', title: '我的优惠券', subtitle: '查看可用优惠券'},
    {icon: '🛡️', title: '账户安全', subtitle: '修改密码和安全设置'},
    {icon: '📞', title: '联系客服', subtitle: '24小时在线服务'},
    {icon: '⚙️', title: '设置', subtitle: '应用偏好设置'},
  ];

  return (
    <ScrollView className="bg-gray-50">
      {/* 顶部用户信息区域 */}
      <View className="bg-indigo-600 pt-12 pb-8 px-6 rounded-b-3xl shadow-lg">
        <View className="flex-row items-center">
          <Image
            source={{uri: user.avatar}}
            className="w-20 h-20 rounded-full border-4 border-indigo-300"
          />
          <View className="ml-4 flex-1">
            <Text className="text-white text-xl font-bold">{user.name}</Text>
            <Text className="text-indigo-100 text-sm mt-1">{user.email}</Text>
            <View className="flex-row mt-2">
              <View className="bg-indigo-500 px-2 py-1 rounded-full">
                <Text className="text-indigo-100 text-xs">
                  {user.membershipLevel}
                </Text>
              </View>
              <View className="bg-yellow-500 px-2 py-1 rounded-full ml-2">
                <Text className="text-yellow-900 text-xs">
                  积分: {user.points}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 功能卡片区域 */}
      <View className="px-4 -mt-6">
        <View className="bg-white rounded-xl p-4 shadow-md mb-6">
          <View className="flex-row justify-between mb-4">
            <View className="items-center">
              <Text className="text-2xl">12</Text>
              <Text className="text-gray-500 text-xs">待付款</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl">5</Text>
              <Text className="text-gray-500 text-xs">待发货</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl">8</Text>
              <Text className="text-gray-500 text-xs">待收货</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl">23</Text>
              <Text className="text-gray-500 text-xs">已完成</Text>
            </View>
          </View>
        </View>

        {/* 功能列表 */}
        <View className="bg-white rounded-xl p-2 shadow-md mb-6">
          {features.map((item, index) => (
            <React.Fragment key={item.title}>
              <TouchableOpacity
                className="flex-row items-center py-3 px-2"
                activeOpacity={0.7}>
                <Text className="text-2xl mr-3 w-8">{item.icon}</Text>
                <View className="flex-1">
                  <Text className="text-gray-800 font-medium">
                    {item.title}
                  </Text>
                  <Text className="text-gray-400 text-xs mt-1">
                    {item.subtitle}
                  </Text>
                </View>
                <Text className="text-gray-400">›</Text>
              </TouchableOpacity>
              {index < features.length - 1 && (
                <View className="border-b border-gray-100 mx-2" />
              )}
            </React.Fragment>
          ))}
        </View>

        {/* 退出登录按钮 */}
        <TouchableOpacity
          className="bg-red-500 rounded-xl p-4 items-center shadow-md mb-8"
          activeOpacity={0.7}
          onPress={() => {
            useAuth.getState().signOut();
          }}>
          <Text className="text-white font-bold">退出登录</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
