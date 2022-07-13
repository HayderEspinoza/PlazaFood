import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateRoutes } from '../utils';
import { Home } from '../screens';

type NavigatorInterface = {
  initialRouteName?: string;
};

const PrivateStack = (props: NavigatorInterface) => {
  const Stack = createNativeStackNavigator();
  const { initialRouteName } = props;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PrivateRoutes.Home} component={Home} />
    </Stack.Navigator>
  );
};

PrivateStack.defaultProps = {
  initialRouteName: 'Home',
};

export default PrivateStack;
