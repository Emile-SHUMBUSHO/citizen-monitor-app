import React from "react";
import { Text, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../layout/main";
const Home = () => {
    const navigation = useNavigation();
     return(
        <HomeWrapper title="Hello, John" navigation={()=>navigation.navigate('notification')}>
           <Text style={{color: 'black'}}>Hello, Mutwara sibo</Text>
        </HomeWrapper>
    )
}
const styles = StyleSheet.create({
})

export default Home;