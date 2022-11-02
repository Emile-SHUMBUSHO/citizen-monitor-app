import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';
import EmailVerification from '../../screens/auth/register/verifyEmail';
import CompleteRegistration from '../../screens/auth/register/register';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='register' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="emailVerification" component={EmailVerification} />
        <Stack.Screen name="completeRegistration" component={CompleteRegistration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
