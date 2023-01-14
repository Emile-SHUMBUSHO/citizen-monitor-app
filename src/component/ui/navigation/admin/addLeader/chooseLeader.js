import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Content } from "../../../containers";
import { Searchbar, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ModalPoup from "../../../../../component/modal";
import { PrimaryButton } from "../../../../buttons";
import { appointAleader } from "../../../../../redux/actions";
import { disappointAleader } from "../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../loader/loader";

const ChooseLeader = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("chef");

  const handlePress = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const { isLoading, citizens } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const appoint = () => {
    dispatch(appointAleader(selectedItem.userId));
  };

  const disappoint = () => {
    dispatch(disappointAleader(selectedItem.userId));
  };

  useEffect(() => {
   if (isLoading){
    setShowModal(false);
   }
  }, [isLoading]);

  return (
    <Container>
      <Loader visible={isLoading} />
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
          {citizens?.length === 0 ? (
            <Text style={styles.infoTxt}>
              No Citizens registered at selected village
            </Text>
          ) : (
            <Text style={styles.infoTxt}>All Citizens In The Village</Text>
          )}
          <ScrollView>
            {citizens?.map((request, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(request)}
                  style={{
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
                    marginVertical: 20,
                  }}
                >
                  <Text>SHUMBUSHO Emile</Text>
                  {role === "chef" ? (
                    <AntDesign name="rightcircle" size={24} color="#FFA726" />
                  ) : (
                    <AntDesign name="checkcircle" size={24} color="black" />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Content>
      </View>
      <ModalPoup visible={showModal}>
        <View style={{ marginVertical: 40 }}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Are you sure you want to appoint Emile SHUMBUSHO as a village chef
            of Muhabura
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}
          >
            <PrimaryButton title="cancel" onPress={() => setShowModal(false)} />
            {role === "chef" ? (
              <PrimaryButton title="disppoint" onPress={() => disappoint()} />
            ) : (
              <PrimaryButton title="appoint" onPress={() => appoint()} />
            )}

          </View>
        </View>
      </ModalPoup>
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
  infoTxt: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChooseLeader;
