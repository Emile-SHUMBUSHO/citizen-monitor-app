import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';
import EmailVerification from '../../screens/auth/register/verifyEmail';
import StartingRegistration from '../../screens/auth/register/register';
import Onboarding from '../../screens/onboarding';
import UmuturageDashboard from '../../component/ui/navigation/umuturage';
import PrivacyPolicy from '../../screens/privacyPolicy';
import TermsOfUse from '../../screens/termsOfUse';
import Notification from '../../screens/notification';
import Migrate from '../../screens/migrate';
import PasswordRecovery from '../../screens/auth/login/passwordRecovery';
import RegisterFamilyMember from '../../screens/familyMember/register';
import Vistor from '../../screens/vistors';
import Settings from '../../screens/settings';
import MuduguduDashboard from '../../component/ui/navigation/mudugudu';
import MutwaraSiboDashboard from '../../component/ui/navigation/mutwaraSibo';
import RegisterSuccess from '../../screens/auth/register/onRegisterSuccess';
import CompleteRegistaration from '../../screens/auth/register/completeRegister'
import RequestSuccess from '../../screens/familyMember/register/onRegisterSuccess';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='umuturage' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={Onboarding}/>
        <Stack.Screen name="umuturage" component={UmuturageDashboard} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="terms" component={TermsOfUse} />
        <Stack.Screen name="policy" component={PrivacyPolicy} />
        <Stack.Screen name="migrate" component={Migrate} />
        <Stack.Screen name="RegisterFamilyMember" component={RegisterFamilyMember} />
        <Stack.Screen name="vistor" component={Vistor} />
        <Stack.Screen name="settings" component={Settings}/>
        <Stack.Screen name="mudugudu" component={MuduguduDashboard}/>
        <Stack.Screen name="mutwaraSibo" component={MutwaraSiboDashboard}/>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="emailVerification" component={EmailVerification} />
        <Stack.Screen name="paswordRecovery" component={PasswordRecovery} />
        <Stack.Screen name="startingRegistration" component={StartingRegistration} />
        <Stack.Screen name="onRegisterSuccess" component={RegisterSuccess}/>
        <Stack.Screen name="completeRegisteration" component={CompleteRegistaration}/>
        <Stack.Screen name="success" component={RequestSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
