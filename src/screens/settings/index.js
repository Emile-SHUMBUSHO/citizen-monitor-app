import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { PrimaryButton } from '../../component/buttons';
import { Container, Content } from '../../component/ui/containers';
import { MainHeader } from '../../component/header';
import {
    AntDesign,
  } from "@expo/vector-icons";
import { Card } from 'react-native-paper';
import { MainInput } from '../../component/inputs';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
              console.log(result);
              if (!result.canceled) {
                setImage(result.uri);
              }
        } catch (err) {
            alert(err.message)
        }
       
      };
    const defaultImg = require('../../../assets/profile.webp')
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
                    <Text style={{color: '#fff', marginHorizontal:20}}>settings</Text>
                </View>
            </MainHeader>
            <Content>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{paddingVertical: 20}}>Change password</Text>
                    <Card style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#f8f9fa'}}>
                        <MainInput
                            placeholder={"Old password"}
                            returnKey='next'
                        />
                        <MainInput
                            placeholder={"New password"}
                            returnKey='next'
                        />
                        <View style={{justifyContent: 'center', alignItems:'center'}}>
                            <PrimaryButton title="Update"/>
                        </View>
                    </Card>
                    <Text style={{paddingVertical: 20}}>Update your profile picture</Text>
                    <Card style={{paddingHorizontal: 10, backgroundColor: '#f8f9fa'}}>
                        <Image source={image !== null ? {uri: `${image}`}: defaultImg} style={{width: 150, height: 150, alignSelf:'center', margin: 10, borderRadius: 100}}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20}}>
                            <PrimaryButton title="Choose Image" onPress={pickImage}/>
                            <PrimaryButton title="Update"/>
                        </View>
                    </Card>
                </ScrollView>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({})
export default Settings;