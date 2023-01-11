import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Content } from "../../../containers";
import { Searchbar, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ModalPoup from "../../../../modal";
import CitizenModal from "./citizensModal";

const ChooseLeader = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [visible, setVisible] = useState(false);
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "#fff", marginHorizontal: 20 }}>
            Find A citizen To Become A leader
          </Text>
        </View>
      </MainHeader>
      <View style={styles.content}>
        <Content>
          <Searchbar
            placeholder="Search for people"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Card style={{ marginVertical: 20, padding: 5 }}>
            <ScrollView>
            <TouchableOpacity
            onPress={()=> setVisible(true)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>SHUMBUSHO Emile</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Ndagijimana Joseph</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Dushimimana Claude</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>SHUMBUSHO Emile</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Ndagijimana Joseph</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Dushimimana Claude</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>SHUMBUSHO Emile</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Ndagijimana Joseph</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Dushimimana Claude</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>SHUMBUSHO Emile</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Ndagijimana Joseph</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 20,
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:5
              }}
            >
              <Text>Dushimimana Claude</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            </ScrollView>
          </Card>
        </Content>
      </View>
      <CitizenModal visible={visible} setVisible={setVisible}/>
    </Container>
  );
};
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
});

export default ChooseLeader;
