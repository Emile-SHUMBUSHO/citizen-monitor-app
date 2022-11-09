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
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
    const maritalStatus = ['Married', 'Single', 'Divorced', 'Widowed'];
    const [marital, setMaritalStatus] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(null);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      const selectedDate = new Date(date);
      const chosenDate = `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`;
      setDate(chosenDate);
      setInputs({ ...inputs, age: chosenDate });
      hideDatePicker();
    };
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
        <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
        <MainInput
              placeholder="Id number if any"
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



const content = [
    <PersonalInfo title="Personal information" />,
    ];

const RegisterFamilyMember = ()=>{
    const [active, setActive] = useState(0);
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <TopHeader>
          <Text>Register Family Member</Text>
        </TopHeader>
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
            </View>
          </View>
      <StatusBar style="light" />
    </View>
    )
}
export default RegisterFamilyMember;

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