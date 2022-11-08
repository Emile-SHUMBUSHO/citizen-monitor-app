import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TopHeader } from "../../component/header";

const Auth = (props) => {
  return (
    <View style={styles.container}>
        <TopHeader />
          <View style={styles.content}>
            <Text style={{ fontWeight: "bold", fontSize: 18, margin: 1, paddingVertical:10,alignSelf:'center' }}>
              {props.title}
            </Text>
            {props.children}
            <Text style={{ fontWeight: "bold", fontSize: 15, margin: 1, paddingVertical: 10, alignSelf:'center' }}>
              {props.bottomTitle}
            </Text>
          </View>
    </View>
  );
};

export default Auth;
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
});
