import {View, Text, StyleSheet, Image } from 'react-native';

export const TopHeader = () => {
    return(
        <View style={styles.top}>
            <Image source={require("../../../assets/icon.png")} style={{width:90, height:98}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height: "25%",
        width:"100%",
    
      },
})