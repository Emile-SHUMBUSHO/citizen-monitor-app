import { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, View, Platform, TouchableWithoutFeedback } from 'react-native';
import { MainHeader } from '../../component/header';
import { Container, Content } from '../../component/ui/containers';
import { Card } from 'react-native-paper';
import { Selector, MainInput } from '../../component/inputs';
import { PrimaryButton } from '../../component/buttons';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerSelector } from '../../component/inputs';
import { DateAndTimePicker } from '../../component/modal';
const Vistor = () => {
    const { Provinces, Districts, Sectors, Cells, Villages } = require('rwanda');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedCell, setSelectedCell] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');
    const navigation = useNavigation();
    const gender = ['Male', 'Female'];
    const [selectedHomeInfo, setSelectedHomeInfo] = useState('');
    const isibo = ['Ubumwe', 'Bwiza', 'Buhoro'];
    const [selectedIsibo, setSelectedIsibo] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [birthDate, setBirthDate] = useState(null);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    return(
        <Container>
            <MainHeader>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10
                }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{color: '#fff', marginHorizontal:20}}>Menyekanisha umushyitsi</Text>
                </View>
            </MainHeader>
            <Content>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{paddingVertical: 20}}>Umwirondoro uranga umushyitsi</Text>
                    <Card style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#f8f9fa'}}>
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
                            data={gender}
                            onSelect={(selectedItem)=>{setSelectedHomeInfo(selectedItem)}}
                            placeholder={'Gender'}
                        />
                        <DatePickerSelector
                            showMode={showMode}
                            birthDate={birthDate} 
                            defaultText="Hitamo itariki yamavuko"/>
                    </Card>
                    <Text style={{paddingVertical: 20}}>Umwirondoro waho umushyisti yaratuye</Text>
                    <Card style={{paddingHorizontal: 10, backgroundColor: '#f8f9fa'}}>
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
                        data={isibo}
                        placeholder={'Isibo'}
                        onSelect = {(selectedItem)=>{setSelectedIsibo(selectedItem)}}
                    />
                    </Card>
                    <DateAndTimePicker
                        setBirthDate={setBirthDate} 
                        show={show} 
                        setShow={setShow} 
                        setDate={setDate} 
                        date={date} 
                        mode={mode}/>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <PrimaryButton onPress={()=> navigation.navigate('RegisterFamilyMember')} title="Submit"/>
                    </View>
                </ScrollView>
            </Content>
        </Container>
    )
}

export default Vistor;