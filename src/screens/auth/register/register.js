import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { PrimaryButton } from "../../../component/buttons";
import { MainInput } from "../../../component/inputs";
import { useNavigation } from "@react-navigation/native";
import { TopHeader } from "../../../component/header";
import { Selector } from "../../../component/inputs";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../../../redux/actions/authAction";
import Loader from "../../../component/loader/loader";
import { Toast } from "../../../component/toaster";

const StartingRegistration = () => {
  const { isLoading, showAuthToast, currentLoginScreen } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const genderType = ["Male", "Female"];
  const [gender, setGender] = useState("");
  const maritalStatus = ["Married", "Single", "Divorced", "Widowed"];
  const [marital, setMaritalStatus] = useState("");
  const [active, setActive] = useState(0);
  const navigation = useNavigation();
  // select address
  const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedIsibo, setSelectedIsibo] = useState("");
  const isiboData = [
    "Bwiza",
    "Keza",
    "Umurinzi",
    "Ganza",
    "Ubutwari",
    "Kirenga",
    "Ubuhoro",
    "Tabaro",
  ];
  const userInfo = {
  email: email,
  code: code,
  firstName: firstName,
  lastName: lastName,
  phoneNumber: phone,
  password: password,
  ID: id,
  province: selectedProvince,
  district: selectedDistrict,
  sector: selectedSector,
  cell: selectedCell,
  village: selectedVillage,
  };

  const userEmailAndCode = async () => {
    const response = await AsyncStorage.getItem("userEmailAndCode");
    const email = JSON.parse(response).email;
    const code = JSON.parse(response).code;
    setEmail(email);
    setCode(code);
  };
  const dispatch = useDispatch();
  const registerCitizen = () => {
    dispatch(registerNewUser(userInfo, 'login'));
  };
  useEffect(() => {
    userEmailAndCode();
    if(currentLoginScreen){
      navigation.navigate(currentLoginScreen);
    }
  }, [currentLoginScreen, navigation]);
  return (
    <View style={styles.container}>
      <Loader visible={isLoading} />
      <TopHeader />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Personal information</Text>
        <MainInput
          placeholder="First name"
          onChangeText={(text) => setFirstName(text)}
        />
        <MainInput
          placeholder="Last name"
          onChangeText={(text) => setLastName(text)}
        />
        <MainInput
          placeholder="Telophone number"
          onChangeText={(text) => setPhone(text)}
        />
        <MainInput
          placeholder="Id number"
          onChangeText={(text) => setId(text)}
        />
        <Selector
          data={genderType}
          placeholder={"Gender"}
          onSelect={(selectedItem) => {
            setGender(selectedItem);
          }}
        />
        <Selector
          data={maritalStatus}
          placeholder={"Martual Status"}
          onSelect={(selectedItem) => {
            setMaritalStatus(selectedItem);
          }}
        />
        <Selector
          data={Provinces()}
          onSelect={(selectedItem) => {
            setSelectedProvince(selectedItem);
          }}
          placeholder={"Province"}
        />
        <Selector
          data={Districts(selectedProvince)}
          placeholder={"District"}
          onSelect={(selectedItem) => {
            setSelectedDistrict(selectedItem);
          }}
        />
        <Selector
          data={Sectors(selectedProvince, selectedDistrict)}
          placeholder={"Sector"}
          onSelect={(selectedItem) => {
            setSelectedSector(selectedItem);
          }}
        />
        <Selector
          data={Cells(selectedProvince, selectedDistrict, selectedSector)}
          placeholder={"Cell"}
          onSelect={(selectedItem) => {
            setSelectedCell(selectedItem);
          }}
        />
        <Selector
          data={Villages(
            selectedProvince,
            selectedDistrict,
            selectedSector,
            selectedCell
          )}
          placeholder={"Village"}
          onSelect={(selectedItem) => {
            setSelectedVillage(selectedItem);
          }}
        />
        <Selector
          data={isiboData}
          placeholder={"Isibo"}
          onSelect={(selectedItem) => {
            setSelectedIsibo(selectedItem);
          }}
        />
        <MainInput
          placeholder="Create Password"
          iconName="lock-outline"
          password
          onChangeText={(text) => setPassword(text)}
        />
        <MainInput
          placeholder="Confirm password"
          iconName="lock-outline"
          password
        />
        <View style={{marginVertical:40, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <PrimaryButton title="Register" onPress={() => registerCitizen()} />
        </View>
      </ScrollView>
      <Toast shown={showAuthToast} message="Account created successfully" />
      <StatusBar style="light" />
    </View>
  );
};
export default StartingRegistration;

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
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  stepStyle: {
    backgroundColor: "black",
  },
  title: {
    paddingVertical: 10,
    alignSelf: "center",
  },
  buttonStyle: {
    marginVertical: 20,
    backgroundColor: "black",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  wrapperStyle: {
    justifyContent: "center",
  },
});
