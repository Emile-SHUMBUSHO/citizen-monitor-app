import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../../../../layout/main";
import { userInfo } from "../../../../../utils/userInfo";
import { Container, Content } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Notification } from "../../../../notification";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const navigation = useNavigation();
  const [userInformations, setUserInformations] = useState();
  useEffect(() => {
    userInfo().then((response) => {
      setUserInformations(response);
    });
  }, []);
  return (
    <Container>
      <MainHeader>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../../../../assets/profile.webp")}
              style={{ width: 50, height: 50, borderRadius: 30 }}
            />
            <Text
              style={{ color: "#fff", paddingHorizontal: 10, fontSize: 18 }}
            >
              {userInformations?.profile?.lastName}{" "}
              {userInformations?.profile?.firstName}
            </Text>
          </View>

          <Notification
            title="5"
            onPress={() => navigation.navigate("notificationForCitizen")}
          />
        </View>
      </MainHeader>
      <Content>
        <Text style={{ marginVertical: 20, fontSize: 18, fontWeight: "700" }}>
          Current housing information
        </Text>
        <LinearGradient
          colors={["#282828", "#4f4f4f"]}
          style={{
            // flex: 1,
            padding: 10,
            borderRadius: 5,
            height: 180
          }}
        >

            <View style={{ padding: 10 }}>
              <Text style={styles.infoTxt}>
                Province: {userInformations?.profile?.province}
              </Text>
              <Text style={styles.infoTxt}>
                District: {userInformations?.profile?.district}
              </Text>
              <Text style={styles.infoTxt}>
                Sector: {userInformations?.profile?.sector}
              </Text>
              <Text style={styles.infoTxt}>
                Cell: {userInformations?.profile?.cell}
              </Text>
              <Text style={styles.infoTxt}>
                Village: {userInformations?.profile?.village}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              {/* <Text>Mudugudu, Cheif: Masirabo Didie</Text>
            <AntDesign name="rightcircle" size={24} color="black" /> */}
            </View>

        </LinearGradient>

        <TouchableOpacity
          onPress={() => navigation.navigate("migrate")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            marginVertical: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            Apply for relocation in new village
          </Text>
          <AntDesign name="rightcircle" size={24} color="white" />
        </TouchableOpacity>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  infoTxt: {
    fontSize: 18,
    color:"white"
  },
});

export default Home;
