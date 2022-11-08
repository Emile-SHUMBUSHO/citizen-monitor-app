import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../infrastructure/theme/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

export const MainInput = ({
  label,
  iconName,
  error,
  password,
  returnKey,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: "center",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ color: COLORS.darkBlue, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          returnKeyType={returnKey}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: COLORS.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};


export const Selector = ({label, iconName, error, data, placeholder, onFocus = ()=>{}, onSelect = () => {}, ...props}) => {
 const [isFocused , setIsFocused] = useState(false);
 return (
  <View>
    <Text style={style.label}>{label}</Text>
    <View style={[
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: "center",
          },
        ]}>
          <SelectDropdown
          data={data}
          defaultButtonText={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onSelect={(selectedItem, index) => {
            onSelect(selectedItem, index);
            setIsFocused(false);
          }}
          buttonStyle={style.dropdown2BtnStyle}
          buttonTextStyle={style.dropdown2BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return isOpened ? <AntDesign name="caretup" size={24} color="black" /> : <AntDesign name="caretdown" size={24} color="black" />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={style.dropdown2DropdownStyle}
          rowStyle={style.dropdown2RowStyle}
          rowTextStyle={style.dropdown2RowTxtStyle}
          selectedRowStyle={style.dropdown2SelectedRowStyle}
        />
    </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
  </View>
 )
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  selectorContainer: {
    height: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    marginVertical:10,
  },
  dropdown2BtnStyle: {
    marginTop: 0,
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.5,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical:10,
  },
  dropdown2BtnTxtStyle: {
    color: 'gray',
    textAlign: 'left',
    fontSize: 13,
  },
  dropdown2DropdownStyle: {
    backgroundColor: 'white',
  },
  dropdown2RowStyle: {
    backgroundColor: 'white',
    borderBottomColor: '#C5C5C5',
  },
  dropdown2RowTxtStyle: {
    color: 'gray',
  },
  dropdown2SelectedRowStyle: { backgroundColor: 'rgba(255,255,255,0.2)' },
});

