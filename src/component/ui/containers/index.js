import {View , StyleSheet} from 'react-native';

export const Container = (propos) =>{
    return(
        <View style={styles.container}>
            {propos.children}
        </View>
    )
}

export const Content = (props) =>{
    return(
        <View style={styles.content}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height:"100%"
      },
      content: {
        height: "75%",
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 20,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,    
      },
})