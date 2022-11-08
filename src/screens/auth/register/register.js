import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Keyboard,
  Text,
  Alert,
} from "react-native";
import { PrimaryButton } from "../../../component/buttons";
import { MainInput } from "../../../component/inputs";
import { useNavigation } from '@react-navigation/native';
import { TopHeader } from '../../../component/header';
import { Selector } from '../../../component/inputs';
import Stepper from "react-native-stepper-ui";

const PersonalInfo = (props) => {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        role: "",
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
          handleErrors("Email or telephone number required", "email");
          isValid = false;
        } else if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
          handleErrors("Invalid email", "email");
          isValid = false;
        }
        if (isValid) {
        }
      };
    const genderType = ['Male', 'Female'];
    const [gender, setGender] = useState('');
    return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <MainInput
              placeholder="First name"
              onChangeText={(text) => handleOnChange(text, "email")}
              error={errors.email}
              onFocus={() => {
                handleErrors(null, "email");
              }}
            />
        <MainInput
              placeholder="Last name"
              onChangeText={(text) => handleOnChange(text, "email")}
              error={errors.email}
              onFocus={() => {
                handleErrors(null, "email");
              }}
            />
        <MainInput
              placeholder="Telophone number"
            />
        <MainInput
              placeholder="Id number"
              onChangeText={(text) => handleOnChange(text, "email")}
              error={errors.email}
              onFocus={() => {
                handleErrors(null, "email");
              }}
            />
        <Selector
            data={genderType}
            placeholder={'Gender'}
            onFocus={() =>{
                handleErrors(null, "gender");
            }}
            onSelect={(selectedItem)=>{

                setGender(selectedItem)
            }}
        />
      </View>
    );
  };

const Address = (props) => {
    const { Provinces, Districts, Sectors, Cells, Villages } = require('rwanda');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedCell, setSelectedCell] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');
    return (
        <View>
        <Text style={styles.title}>{props.title}</Text>
         <Selector
            data={Provinces()}
            onSelect={(selectedItem)=>{setSelectedProvince(selectedItem)}}
            placeholder={'Province'}
        />
         <Selector
            data={Districts(selectedProvince)}
            placeholder={'District'}
            onSelect={(selectedItem)=>{setSelectedDistrict(selectedItem)}}
        />
        <Selector
            data={Sectors(selectedProvince,selectedDistrict)}
            placeholder={'Sector'}
            onSelect={(selectedItem)=>{setSelectedSector(selectedItem)}}
        />
        <Selector
            data={Cells(selectedProvince,selectedDistrict,selectedSector)}
            placeholder={'Cell'}
            onSelect={(selectedItem)=>{setSelectedCell(selectedItem)}}
        />
        <Selector
            data={Villages(selectedProvince,selectedDistrict,selectedSector,selectedCell)}
            placeholder={'Village'}
            onSelect = {(selectedItem)=>{setSelectedVillage(selectedItem)}}
        />
        </View>
    );
};

const RoleAndPassword = (props) => {
    const roles = ['Mudugudu', 'Mutwarasibo', 'Umuturage']
    const [role, setRole] = useState('');
    return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Selector
            data={roles}
            placeholder={'Register as'}
            onSelect={(selectedItem)=>{
                setRole(selectedItem);
            }}
        />
        <MainInput
              placeholder="Password"
              iconName="lock-outline"
              password
            />
        <MainInput
              placeholder="Confirm password"
              iconName="lock-outline"
              password
            />
      </View>
    );
  };

const content = [
    <PersonalInfo title="Personal information" />,
    <Address title="Address" />,
    <RoleAndPassword title="Select role and create password" />,
    ];

const CompleteRegistration = ()=>{
    const [active, setActive] = useState(0);
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <TopHeader/>
          <View style={styles.content}>
            <Stepper
                active={active}
                content={content}
                onNext={() => setActive((p) => p + 1)}
                onBack={() => setActive((p) => p - 1)}
                onFinish={() => navigation.navigate('dashboard')}
                buttonStyle={styles.buttonStyle}
                showButton={true}
                buttonTextStyle={styles.buttonTextStyle}
                wrapperStyle={styles.wrapperStyle}
                stepStyle={styles.stepStyle}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20
              }}
            >
              {/* <PrimaryButton title="Register" /> */}
            </View>
          </View>
      <StatusBar style="light" />
    </View>
    )
}
export default CompleteRegistration;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      height:"100%"
    },
    content: {
      height: "75%",
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: 20,
      borderTopRightRadius:25,
      borderTopLeftRadius:25,    
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
        marginHorizontal: 50
    },
    wrapperStyle: {
        justifyContent: 'center',
    }
  });