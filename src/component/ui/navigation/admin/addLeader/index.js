import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PrimaryButton } from "../../../../../component/buttons";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../containers";
import { MainHeader } from "../../../../../component/header";
import { Selector } from "../../../../../component/inputs";
import { AntDesign } from "@expo/vector-icons";
import { getAllVillageCitizens } from "../../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../../loader/loader";
const PointLeader = () => {
  const { isLoading, currentCitizensScreen } = useSelector(
    (state) => state.admin
  );
  const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  const addressInfo = {
    province: selectedProvince,
    district: selectedDistrict,
    sector: selectedSector,
    cell: selectedCell,
    village: selectedVillage,
  };
  const dispatch = useDispatch();
  const getAllVillageCitizensByLocation = () => {
    dispatch(getAllVillageCitizens(addressInfo, "chooseLeader"));
  };
  const navigation = useNavigation();
  useEffect(()=>{
    if(currentCitizensScreen){
      navigation.navigate(currentCitizensScreen);
    }
  },[currentCitizensScreen, navigation])
  return (
    <Container>
      <Loader visible={isLoading}/>
      <MainHeader>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "#fff", marginHorizontal: 20 }}>
            Choose Area Where To Appoint A leader
          </Text>
        </View>
      </MainHeader>
      <View style={styles.content}>
        <Selector
          data={Provinces()}
          onSelect={(selectedItem) => {
            setSelectedProvince(selectedItem);
          }}
          placeholder={"Province"}
        />
        <Selector
          data={Districts(selectedProvince)}
          placeholder={"District"}
          onSelect={(selectedItem) => {
            setSelectedDistrict(selectedItem);
          }}
        />
        <Selector
          data={Sectors(selectedProvince, selectedDistrict)}
          placeholder={"Sector"}
          onSelect={(selectedItem) => {
            setSelectedSector(selectedItem);
          }}
        />
        <Selector
          data={Cells(selectedProvince, selectedDistrict, selectedSector)}
          placeholder={"Cell"}
          onSelect={(selectedItem) => {
            setSelectedCell(selectedItem);
          }}
        />
        <Selector
          data={Villages(
            selectedProvince,
            selectedDistrict,
            selectedSector,
            selectedCell
          )}
          placeholder={"Village"}
          onSelect={(selectedItem) => {
            setSelectedVillage(selectedItem);
          }}
        />
        <View
          style={{
            marginVertical: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton
            title="Next"
            onPress={() => getAllVillageCitizensByLocation()}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </Container>
  );
};
export default PointLeader;

const styles = StyleSheet.create({
  content: {
    height: "75%",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  stepStyle: {
    backgroundColor: "black",
  },
  title: {
    paddingVertical: 10,
    alignSelf: "center",
  },
  buttonStyle: {
    marginVertical: 20,
    backgroundColor: "black",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  wrapperStyle: {
    justifyContent: "center",
  },
});
