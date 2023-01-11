import { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { MainHeader } from "../../component/header";
import { Container, Content } from "../../component/ui/containers";
import { Card } from "react-native-paper";
import { Selector, MainInput } from "../../component/inputs";
import { PrimaryButton } from "../../component/buttons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { leftVillage } from "../../redux/actions/displacementAction";
import Loader from "../../component/loader/loader";
import { userInfo } from "../../utils/userInfo";

const Migrate = () => {
  const { isLoading } = useSelector((state) => state.displacement);
  const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const navigation = useNavigation();
  const homeInfo = ["Ndatuye", "Ndakodesha"];
  const [familyNumber, setFamilyNumber] = useState(null);
  const [selectedHomeInfo, setSelectedHomeInfo] = useState("");
  const isibo = ["Ubumwe", "Bwiza", "Buhoro"];
  const [selectedIsibo, setSelectedIsibo] = useState("");
  const displacementData = {
    province: selectedProvince,
    district: selectedDistrict,
    sector: selectedSector,
    cell: selectedCell,
    village: selectedVillage,
  };
  const leaveAndJoinVillage = ()=>{
    setStatus(true);
  }
  const dispatch = useDispatch();
  const displacementFunc = () => {
    dispatch(leftVillage(displacementData));
  };
  const [userInformations, setUserInformations] = useState();
  useEffect(()=>{
      userInfo().then((response)=>{
          setUserInformations(response); 
      })
  },[]);
  const [status, setStatus] = useState(userInformations?.profile?.village);
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
          <Text style={{ color: "#fff", marginHorizontal: 10, }}>
            Request to join a village
          </Text>
        </View>
      </MainHeader>
      <Content>
        {status ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* <Card
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Selector
                  label="Uratuye Cyangwa Urakodesha?"
                  data={homeInfo}
                  onSelect={(selectedItem) => {
                    setSelectedHomeInfo(selectedItem);
                  }}
                  placeholder={"Home status"}
                />
                <MainInput
                  placeholder={"Umubare wabagize umuryango"}
                  keyboardType="numeric"
                  returnKey="next"
                  onChangeText={(text) => setFamilyNumber(text)}
                />
              </Card> */}
              <Text style={{ paddingVertical: 20, fontSize: 18 }}>
                Address of a village to join
              </Text>
              <Card
                style={{ paddingHorizontal: 10, backgroundColor: "#f8f9fa" }}
              >
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
                  data={Cells(
                    selectedProvince,
                    selectedDistrict,
                    selectedSector
                  )}
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
                {/* <Selector
                  data={isibo}
                  placeholder={"Isibo"}
                  onSelect={(selectedItem) => {
                    setSelectedIsibo(selectedItem);
                  }}
                /> */}
              </Card>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {/* <PrimaryButton onPress={()=> navigation.navigate('RegisterFamilyMember',{familyNumber})} title="Submit"/> */}
                <PrimaryButton
                  onPress={() => displacementFunc()}
                  title="Submit"
                />
              </View>
            </ScrollView>
          </>
        ) : (
          <>
          <View style={{ flexDirection:"column", justifyContent: "center", alignItems:"center", flex:1}}>
            <Text style={{textAlign: "center", fontSize:28,}}>You have arleady registered at {userInformations?.profile?.village} village do you want to leave?</Text>
            <PrimaryButton onPress={()=> leaveAndJoinVillage()} title="Yes"/>
            <PrimaryButton onPress={()=> navigation.goBack()} title="No"/>
          </View>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Migrate;
