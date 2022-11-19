import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../layout/main";
const Home = () => {
    const navigation = useNavigation();
     return(
        <HomeWrapper title="Hello, John" navigation={()=>navigation.navigate('notification')}>
           <Text style={styles.text}>Murakaza neza kuri, Citizen Monitor APP</Text>
           <Text>Menya amakuru y'isibo uyobora</Text>
           <Text>Fasha abaturage uyobora kumenyekanisha imyirondoro yabo mw'isibo batuyemo, ndetse no kumenyekanisha imyirondoro yabo muyindi sibo bimukiyemo</Text>
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
                        <Text>New Request</Text>
                        <Text>Tanga uburenganzira kubaturage bashya mukwimenyekanisha mw'isibo uyobora</Text>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity>
            </View>
        </HomeWrapper>
    )
}
const styles = StyleSheet.create({
})

export default Home;