import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { PrimaryButton } from "../../../component/buttons/";
import { MainInput } from "../../../component/inputs";
import { TopHeader } from "../../../component/header";
import { useNavigation } from "@react-navigation/native";
import ModalPoup from "../../../component/modal";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/authAction";
import Loader from "../../../component/loader/loader";

const Login = (props) => {
  const { isLoading} = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleErrors("please input email address", "email");
      isValid = false;
    } else if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      handleErrors("please input valid email address", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleErrors("please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleErrors("Weak password", "password");
      isValid = false;
    }
    if (isValid) {
      logInUserFunc();
    }
  };
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const userData = {
    email: inputs.email,
    password: inputs.password,
  };
  const dispatch = useDispatch();
  const logInUserFunc = () => {
    dispatch(loginUser(userData));
  };
  return (
    <View style={styles.container}>
      <Loader visible={isLoading}/>
      <TopHeader />
      <View style={styles.content}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            margin: 1,
            paddingVertical: 10,
            alignSelf: "center",
          }}
        >
          welcome back!
        </Text>
        <MainInput
          style={styles.input}
          label="Email Address"
          placeholder="Enter your email address"
          iconName="email-outline"
          returnKey="next"
          onChangeText={(text) => handleOnChange(text, "email")}
          error={errors.email}
          onFocus={() => {
            handleErrors(null, "email");
          }}
        />
        <MainInput
          onChangeText={(text) => handleOnChange(text, "password")}
          onFocus={() => handleErrors(null, "password")}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={{ fontWeight: "bold", margin: 10 }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton title="Login" onPress={validate} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("register");
              }}
            >
              <Text style={{ fontWeight: "bold", left: 5 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Modal component */}
        <ModalPoup visible={visible}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../../../../assets/x.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <MainInput
              style={styles.input}
              label="Email Address"
              placeholder="Enter your email address"
              iconName="email-outline"
              returnKey="next"
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PrimaryButton
                title="Submit"
                onPress={() => navigation.navigate("paswordRecovery")}
              />
            </View>
          </View>
        </ModalPoup>
      </View>
    </View>
  );
};

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
});

export default Login;
