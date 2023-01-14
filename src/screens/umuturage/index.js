import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../layout/main";
import { userInfo } from "../../utils/userInfo";
const Home = () => {
    const navigation = useNavigation();
    const [userInformations, setUserInformations] = useState();
    useEffect(()=>{
        userInfo().then((response)=>{
            setUserInformations(response); 
        })
    },[]);
     return(
        <HomeWrapper title={userInformations?.profile?.lastName + " " + userInformations?.profile?.firstName} navigation={()=>navigation.navigate('notification')}>
            <View style={{
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 10,
                    marginVertical: 20
                }}>
                    <View>
                        <Text>Ibaruze mu mudugudu</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('migrate')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity>
                    
            </View>
{/* 
            <View style={{
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 10,
                    marginVertical: 20
                }}>
                    <View>
                        <Text>Menyekanisha abashyitsi</Text>
                        <Text>It's easy start now</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('vistor')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity>
                    
            </View> */}

            <Text style={{marginVertical:20, fontSize: 18, fontWeight:'700'}}>Current residence</Text>
            <Card>
                <View style={{padding: 10}}>
                    <Text>Province: {userInformations?.profile?.province}</Text>
                    <Text>District: {userInformations?.profile?.district}</Text>
                    <Text>Sector: {userInformations?.profile?.sector}</Text>
                    <Text>Cell: {userInformations?.profile?.cell}</Text>
                    <Text>Village: {userInformations?.profile?.village}</Text>
                </View>
                {/* <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding:10,
                    }}>
                    <Text>
                        Mudugudu, Cheif: Masirabo Didie
                    </Text>
                    <AntDesign name="rightcircle" size={24} color="black" />
                </View> */}
            </Card>
        </HomeWrapper>
    )
}
const styles = StyleSheet.create({
})

export default Home;