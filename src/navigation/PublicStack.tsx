import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PublicRoutes } from '../utils';
import { Login } from '../screens';

type NavigatorInterface = {
  initialRouteName?: string;
};

const PublicStack = (props: NavigatorInterface) => {
  const Stack = createNativeStackNavigator();
  const { initialRouteName } = props;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PublicRoutes.Login} component={Login} />
    </Stack.Navigator>
  );
};

PublicStack.defaultProps = {
  initialRouteName: 'Login',
};

export default PublicStack;
