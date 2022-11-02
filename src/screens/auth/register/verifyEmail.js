import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { TopHeader } from "../../../component/header";
import { useNavigation } from "@react-navigation/native";

const EmailVerification = ({ route }) => {
    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
  return (
    <View style={styles.container}>
        <TopHeader />
          <View style={styles.content}>
            <Text style={{ fontWeight: "bold", fontSize: 18, margin: 1, paddingVertical:10,alignSelf:'center' }}>
              Enter verification code to verify your email
            </Text>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              secureTextEntry={true}
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15, margin: 1, paddingVertical: 10, alignSelf:'center' }}>
              Ferification code will expire in 30 minutes
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('completeRegistration')}}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Next</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default EmailVerification;
const CELL_COUNT = 6;
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
  input: {
    width: "100%",
    height: 45,
    borderRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    color: "white",
  },
  root: { flex: 1, padding: 10 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    borderRadius: 10,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "black",
  },
});
