import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';
import EmailVerification from '../../screens/auth/register/verifyEmail';
import CompleteRegistration from '../../screens/auth/register/register';
import Onboarding from '../../screens/onboarding';
import DashboardTabs from '../../component/ui/navigation/bottom';
import PrivacyPolicy from '../../screens/privacyPolicy';
import TermsOfUse from '../../screens/termsOfUse';
import Notification from '../../screens/notification';
import Migrate from '../../screens/migrate';
import PasswordRecovery from '../../screens/auth/login/passwordRecovery';
import RegisterFamilyMember from '../../screens/familyMember/register';
import Vistor from '../../screens/vistors';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='dashboard' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={Onboarding}/>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="emailVerification" component={EmailVerification} />
        <Stack.Screen name="paswordRecovery" component={PasswordRecovery} />
        <Stack.Screen name="completeRegistration" component={CompleteRegistration} />
        <Stack.Screen name="dashboard" component={DashboardTabs} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="terms" component={TermsOfUse} />
        <Stack.Screen name="policy" component={PrivacyPolicy} />
        <Stack.Screen name="migrate" component={Migrate} />
        <Stack.Screen name="RegisterFamilyMember" component={RegisterFamilyMember} />
        <Stack.Screen name="vistor" component={Vistor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
