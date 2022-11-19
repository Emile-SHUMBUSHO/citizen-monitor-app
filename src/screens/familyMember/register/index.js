import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { MainInput, DatePickerSelector } from "../../../component/inputs";
import { useNavigation } from '@react-navigation/native';
import { Selector } from '../../../component/inputs';
import Stepper from "react-native-stepper-ui";
import { AntDesign } from '@expo/vector-icons';
import { MainHeader } from "../../../component/header";
import { DateAndTimePicker } from "../../../component/modal";

const PersonalInfo = (props) => { 
    const genderStatus = ['Male', 'Female'];
    const isano = ['Uwo mwashakkanye', 'Umwana', 'Umukozi', 'Umuvandimwe', 'Nta sano dufitanye'];
    const [relation, setRelation] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [birthDate, setBirthDate] = useState(null);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <MainInput
            placeholder="First name"
        />
        <MainInput
            placeholder="Last name"
        />
        <MainInput
            placeholder="Nimero y'indangamuntu"
            keyboardType='numeric'
            returnKey='next'
        />
        <Selector
            data={genderStatus}
            onSelect={(selectedItem)=>{setGender(selectedItem)}}
            placeholder={'Gender'}
        />
        <Selector
          data={isano}
          onSelect={(selectedItem)=>{setRelation(selectedItem)}}
          placeholder={'Isano'}
        />
        <DatePickerSelector
            showMode={showMode}
            birthDate={birthDate} 
            defaultText="Hitamo itariki yamavuko"/>
        <DateAndTimePicker 
            setBirthDate={setBirthDate} 
            show={show} 
            setShow={setShow} 
            setDate={setDate} 
            date={date} 
            mode={mode}
        />
      </View>
    );
  };





const RegisterFamilyMember = ({route})=>{
    const {familyNumber} = route.params;
    const content = [
      ];
    for(let i=0; i < familyNumber; i++){
      title = `Umwirondoro wabagize umuryango ${i+1}`
      content.push(<PersonalInfo title={title} />);
    }
    const [active, setActive] = useState(0);
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <MainHeader>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10
                }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{color: '#fff', marginHorizontal:20}}>Umwirondoro wabagize umuryango</Text>
                </View>
          </MainHeader>
          <View style={styles.content}>
            <Stepper
                active={active}
                content={content}
                onNext={() => setActive((p) => p + 1)}
                onBack={() => setActive((p) => p - 1)}
                onFinish={() => navigation.navigate('umuturage')}
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