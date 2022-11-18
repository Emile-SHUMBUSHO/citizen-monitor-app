import React, { useState} from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MainHeader } from "../../component/header";
import { Container, Content } from "../../component/ui/containers";
import { Notification } from "../../component/notification";
import { AntDesign } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const HomeWrapper = (props) => {
    const navigation = useNavigation();
     return(
        <Container>
            <MainHeader>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10
                    }}>
                    <Text style={{color: "white"}}>{props.title}</Text>
                    <Notification title="5" onPress={props.navigation}/>
                </View>
            </MainHeader>
            <Content>
            {/* <View style={{
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
                        <Text>It's easy start now</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('migrate')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity>
                    
            </View>

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
                    
            </View>

            <Text style={{marginVertical:20, fontSize: 18, fontWeight:'700'}}>Your current residence</Text>
            <Card>
                <View style={{padding: 10}}>
                    <Text>Kigali, City</Text>
                    <Text>Nyarugenge, District</Text>
                    <Text>Nyamirambo, Sector</Text>
                    <Text>Kivugiza, Cell</Text>
                    <Text>Bwiza, Village</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding:10,
                    }}>
                    <Text>
                        Mudugudu, Cheif: Masirabo Didie
                    </Text>
                    <AntDesign name="rightcircle" size={24} color="black" />
                </View>
            </Card> */}
            {props.children}
            </Content>
            <StatusBar style="light"/>
        </Container>
    )
}
const styles = StyleSheet.create({
})

export default HomeWrapper;