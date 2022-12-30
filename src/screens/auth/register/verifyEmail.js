import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../../layout/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verifyOtp } from "../../../redux/actions/authAction";
import Loader from "../../../component/loader/loader";

const EmailVerification = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const verifyData = {
    email: email,
    code: value,
  };
  const dispatch = useDispatch();
  const checkOtp = () => {
    dispatch(verifyOtp(verifyData)).then(() => {
      setTimeout(() => {
          navigation.navigate("startingRegistration");
      },3000);
    });
  };
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const getUserEmail = async () => {
    const response = await AsyncStorage.getItem("email");
    const email = JSON.parse(response).email;
    setEmail(email);
  };
  useEffect(() => {
    getUserEmail();
  }, []);
  return (
    <Auth
      title="Enter verification code to verify your email"
      bottomTitle="Code sent to your email"
    >
      <Loader visible={isLoading} />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        secureTextEntry={true}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <TouchableOpacity onPress={() => checkOtp()}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Check OTP</Text>
      </TouchableOpacity>
    </Auth>
  );
};

export default EmailVerification;
const CELL_COUNT = 6;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  content: {
    height: "75%",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    color: "white",
  },
  root: { flex: 1, padding: 10 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    borderRadius: 10,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "black",
  },
});
