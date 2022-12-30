import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { PrimaryButton } from "../../../component/buttons";
import { MainInput } from "../../../component/inputs";
import { useNavigation } from "@react-navigation/native";
import { TopHeader } from "../../../component/header";
import { Toast } from "../../../component/toaster";
import Loader from "../../../component/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { checkEmail } from "../../../redux/actions/authAction";

const Register = () => {
  const { isLoading, showAuthToast} = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
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
      handleErrors("Email or telephone number required", "email");
      isValid = false;
    } else if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      handleErrors("Invalid email", "email");
      isValid = false;
    }
    if (isValid) {
      checkUserEmail();
    }
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const checkUserEmail = ()=>{
    dispatch(checkEmail(inputs.email)).then(()=>{
      setTimeout(()=>{
        navigation.navigate("emailVerification");
      }, 3500);
    });
  }
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
            alignSelf: "center",
            paddingVertical: 40,
          }}
        >
          Murakaza Neza
        </Text>
        <MainInput
          label={"Email or telephone number"}
          style={styles.input}
          placeholder="Enter Your Email Or Telephone"
          iconName="email-outline"
          onChangeText={(text) => handleOnChange(text, "email")}
          error={errors.email}
          onFocus={() => {
            handleErrors(null, "email");
          }}
        />
        <View style={styles.termsAndCondition}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ color: "#BABBC3" }}>
              By creating an account you agree to our
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("terms");
                }}
              >
                <Text style={{ fontWeight: "bold", left: 5 }}>
                  Terms of use
                </Text>
              </TouchableOpacity>
              <Text style={{ left: 10, color: "#BABBC3" }}>and</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("policy");
                }}
              >
                <Text style={{ fontWeight: "bold", left: 15 }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <PrimaryButton title="Register" onPress={validate} />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#BABBC3" }}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <Text style={{ fontWeight: "bold", left: 5 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Toast
        shown={showAuthToast}
        message={"Email verification code sent successfully"}
      />
      <StatusBar style="light" />
    </View>
  );
};
export default Register;

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

  logo: {
    width: 100,
    height: 40,
  },

  DropDownPicker: {
    height: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0,
    borderRadius: 20,
  },

  termsAndCondition: {
    flexDirection: "row",
    top: 10,
  },

  inputTitle: {
    color: "#BABBC3",
    margin: 3,
  },
  selectedValue: {
    color: "#BABBC3",
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
