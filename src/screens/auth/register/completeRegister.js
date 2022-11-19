import { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { MainHeader } from '../../../component/header';
import { Container, Content } from '../../../component/ui/containers';
import { Card } from 'react-native-paper';
import { Selector, MainInput } from '../../../component/inputs';
import { PrimaryButton } from '../../../component/buttons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CompleteRegistaration = () => {
    const { Provinces, Districts, Sectors, Cells, Villages } = require('rwanda');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedCell, setSelectedCell] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');
    const navigation = useNavigation();
    const homeInfo = ['Ndatuye', 'Ndakodesha'];
    const [familyNumber, setFamilyNumber] = useState(null);
    const [selectedHomeInfo, setSelectedHomeInfo] = useState('');
    const isibo = ['Ubumwe', 'Bwiza', 'Buhoro'];
    const [selectedIsibo, setSelectedIsibo] = useState('');
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
                    <Text style={{color: '#fff', marginHorizontal:20}}>Saba kubarurwa mu mudugudu utuyemo</Text>
                </View>
            </MainHeader>
            <Content>
                <Card style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#f8f9fa'}}>
                    <Selector
                        label="Uratuye Cyangwa Urakodesha?"
                        data={homeInfo}
                        onSelect={(selectedItem)=>{setSelectedHomeInfo(selectedItem)}}
                        placeholder={'Home status'}
                    />
                    <MainInput
                        placeholder={"Umubare wabagize umuryango"}
                        keyboardType='numeric'
                        returnKey='next'
                        onChangeText={(text)=> setFamilyNumber(text)}
                    />
                </Card>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <PrimaryButton onPress={()=> navigation.navigate('RegisterFamilyMember',{familyNumber})} title="Submit"/>
                </View>
            </Content>
        </Container>
    )
}

export default CompleteRegistaration;