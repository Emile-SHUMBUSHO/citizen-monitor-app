import {View, StyleSheet, Image } from 'react-native';

export const TopHeader = () => {
    return(
        <View style={styles.top}>
            <Image source={require("../../../assets/logo.png")} style={{width:90, height:98}}/>
        </View>
    )
}

export const MainHeader = (props)=>{
    return(
        <View style={styles.MainTop}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height: "25%",
      },
      MainTop: {
        backgroundColor: "black",
        justifyContent: 'center',
        paddingVertical: 40
      }
})