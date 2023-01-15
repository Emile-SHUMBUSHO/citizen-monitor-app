import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/login";
import Register from "../../screens/auth/register";
import EmailVerification from "../../screens/auth/register/verifyEmail";
import StartingRegistration from "../../screens/auth/register/register";
import Onboarding from "../../screens/onboarding";
import PrivacyPolicy from "../../screens/privacyPolicy";
import TermsOfUse from "../../screens/termsOfUse";
import Notification from "../../screens/notification";
import NotificationForLeader from "../../component/ui/navigation/leader/notifications";
import NotificationForCitizen from "../../component/ui/navigation/citizen/notifications";
import Migrate from "../../screens/migrate";
import PasswordRecovery from "../../screens/auth/login/passwordRecovery";
import RegisterFamilyMember from "../../screens/familyMember/register";
import Vistor from "../../screens/vistors";
import Settings from "../../screens/settings";
import AdminDashboard from "../../component/ui/navigation/admin";
import LeaderDashboard from "../../component/ui/navigation/leader";
import CitizenDashboard from "../../component/ui/navigation/citizen";
import PointLeader from "../../component/ui/navigation/admin/addLeader";
import ChooseLeader from "../../component/ui/navigation/admin/addLeader/chooseLeader";
import RegisterSuccess from "../../screens/auth/register/onRegisterSuccess";
import CompleteRegistaration from "../../screens/auth/register/completeRegister";
import RequestSuccess from "../../screens/familyMember/register/onRegisterSuccess";
const Stack = createNativeStackNavigator();
import { Init } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function AppNavigator() {
  const dispatch = useDispatch();
  const { userRole } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(Init());
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{ headerShown: false }}
      >
        {userRole?.token ? (
          <>
            {userRole?.user?.role === "admin" ? (
              <Stack.Screen name="admin" component={AdminDashboard} />
            ) : null}
            {userRole?.user?.role === "chef" ? (
              <Stack.Screen name="mudugudu" component={LeaderDashboard} />
            ) : null}
            {userRole?.user?.role === "normal" ? (
              <Stack.Screen name="umuturage" component={CitizenDashboard} />
            ) : null}
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen
              name="notificationForLeader"
              component={NotificationForLeader}
            />
            <Stack.Screen
              name="notificationForCitizen"
              component={NotificationForCitizen}
            />
            <Stack.Screen name="migrate" component={Migrate} />
            <Stack.Screen
              name="RegisterFamilyMember"
              component={RegisterFamilyMember}
            />
            <Stack.Screen name="vistor" component={Vistor} />
            <Stack.Screen name="settings" component={Settings} />
            <Stack.Screen name="success" component={RequestSuccess} />
            <Stack.Screen name="pointLeader" component={PointLeader} />
            <Stack.Screen name="chooseLeader" component={ChooseLeader} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen
              name="emailVerification"
              component={EmailVerification}
            />
            <Stack.Screen name="paswordRecovery" component={PasswordRecovery} />
            <Stack.Screen
              name="startingRegistration"
              component={StartingRegistration}
            />
            <Stack.Screen
              name="onRegisterSuccess"
              component={RegisterSuccess}
            />
            <Stack.Screen
              name="completeRegisteration"
              component={CompleteRegistaration}
            />
            <Stack.Screen name="terms" component={TermsOfUse} />
            <Stack.Screen name="policy" component={PrivacyPolicy} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
