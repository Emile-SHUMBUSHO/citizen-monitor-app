import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Container, Content } from "../../../containers";
import { MainHeader } from "../../../../header";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Logout } from "../../../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../../../../utils/userInfo";

const Profile = () => {
  const navigation = useNavigation();
  const [userInformations, setUserInformations] = useState();
  const {currentLoginScreen} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const logutUser = () => {
    dispatch(Logout("login"));
  };
  useEffect(() => {
    userInfo().then((response) => {
      setUserInformations(response);
    });
    if(currentLoginScreen){
      navigation.navigate(currentLoginScreen);
    }
  }, [currentLoginScreen, navigation]);
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
            {userInformations?.profile?.lastName}{" "}
            {userInformations?.profile?.firstName}
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

        <TouchableOpacity style={styles.touchableOpacity} onPress={logutUser}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={{ left: 10 }}>Log Out</Text>
        </TouchableOpacity>
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
