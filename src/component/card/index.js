import { View } from "react-native";

export const Card = (props)=> {
    return(
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
            marginVertical: 40
        }}>
            {props.children}
        </View>
    )
}