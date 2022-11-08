import { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { MainHeader } from '../../component/header';
import { Container, Content } from '../../component/ui/containers';
import { Card } from 'react-native-paper';
import { Selector } from '../../component/inputs';
import { PrimaryButton } from '../../component/buttons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Migrate = () => {
    const { Provinces, Districts, Sectors, Cells, Villages } = require('rwanda');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedCell, setSelectedCell] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');
    const navigation = useNavigation();
    const homeInfo = ['Permanent residence', 'Renting'];
    const [selectedHomeInfo, setSelectedHomeInfo] = useState('');
    const isibo = ['Ubumwe', 'Bwiza', 'Buhoro'];
    const [selectedIsibo, setSelectedIsibo] = useState('');
    return(
        <Container>
            <MainHeader>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{color: '#fff', marginHorizontal:20}}>Saba kubarurwa mu mudugudu utuyemo</Text>
            </MainHeader>
            <Content>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{paddingVertical: 20}}>Are you permanent residence or renting</Text>
                    <Card style={{paddingHorizontal: 10, backgroundColor: '#f8f9fa'}}>
                        <Selector
                            data={homeInfo}
                            onSelect={(selectedItem)=>{setSelectedHomeInfo(selectedItem)}}
                            placeholder={'Home status'}
                        />
                    </Card>
                    <Text style={{paddingVertical: 20}}>Choose your next home address information</Text>
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
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <PrimaryButton title="Submit"/>
                    </View>
                </ScrollView>
            </Content>
        </Container>
    )
}

export default Migrate;