import React, { useEffect } from "react";
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
import { Init } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function AppNavigator() {
  const { userToken, initialLogin, logoutSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const iniLogin = async () => {
    await dispatch(Init());
  };
  useEffect(() => {
    iniLogin();
  }, [initialLogin, logoutSuccess]);
  const [role, setRole] = useState("admin");
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{ headerShown: false }}
      >
        {userToken ? (
          <>
            {role === "admin" ? (
              <Stack.Screen name="admin" component={AdminDashboard} />
            ) : null}
            {role === "leader" ? (
              <Stack.Screen name="mudugudu" component={LeaderDashboard} />
            ) : null}
            {role === "citizen" ? (
              <Stack.Screen name="umuturage" component={CitizenDashboard} />
            ) : null}
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen
              name="notificationForLeader"
              component={NotificationForLeader}
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
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="login" component={Login} />
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
