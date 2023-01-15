import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Container, Content } from "../../../../../component/ui/containers";
import { MainHeader } from "../../../../../component/header";
import FamilyVistor from "../../../../../screens/vistors/list";
import FamilyMember from "../../../../../screens/familyMember/list";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react";
import { Logout } from "../../../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { userInfo } from "../../../../../utils/userInfo";

const Profile = () => {
  const navigation = useNavigation();
  const [vistorVisible, setVistorVisible] = useState(false);
  const [familyVisible, setFamilyVisible] = useState(false);
  const [userInformations, setUserInformations] = useState();
  const dispatch = useDispatch();
  const logutUser = () => {
    dispatch(Logout());
  };
  useEffect(() => {
   userInfo().then((response)=>{
    setUserInformations(response)
   })
  }, []);
  return (
    <Container>
      <MainHeader>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../../../../../../assets/profile.webp")}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <Text style={{ color: "#fff", paddingHorizontal: 10, fontSize: 18 }}>
            {userInformations?.profile?.lastName} {userInformations?.profile?.firstName}
          </Text>
        </View>
      </MainHeader>
      <Content>
        <TouchableOpacity
          onPress={() => navigation.navigate("settings")}
          style={styles.touchableOpacity}
        >
          <Ionicons name="md-settings-outline" size={24} color="black" />
          <Text style={{ left: 10 }}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <MaterialIcons name="live-tv" size={24} color="black" />
          <Text style={{ left: 10 }}>Tutorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <FontAwesome5 name="question-circle" size={24} color="black" />
          <Text style={{ left: 10 }}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <Feather name="share-2" size={24} color="black" />
          <Text style={{ left: 10 }}>Share</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "black",
            margin: 10,
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setFamilyVisible(true)}
        >
          <MaterialIcons name="family-restroom" size={24} color="black" />
          <Text style={{ left: 10 }}>Abagize umuryango</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("History")}
        >
          <AntDesign name="areachart" size={24} color="black" />
          <Text style={{ left: 10 }}>Migration History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={logutUser}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={{ left: 10 }}>Log Out</Text>
        </TouchableOpacity>
        <FamilyMember visible={familyVisible} setVisible={setFamilyVisible} />
        <FamilyVistor visible={vistorVisible} setVisible={setVistorVisible} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
  },
});

export default Profile;
