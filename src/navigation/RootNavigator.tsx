import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './AuthNavigator';
import {TabNavigator} from './TabNavigator';
import {TRootStackParams} from './navigate';
import {useAuth} from '@store/auth';
export const RootStack = createNativeStackNavigator<TRootStackParams>();

export const RootNavigator = () => {
  const {token} = useAuth();

  const logined = !!token;
  const logout = !token;

  return (
    <RootStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
        headerShadowVisible: false,
        headerBackButtonMenuEnabled: false,
        headerTintColor: 'rgba(0, 0, 0, 0.85)',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}>
      {logined && (
        <RootStack.Group>
          <RootStack.Screen
            name="Main"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
      {logout && (
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};
