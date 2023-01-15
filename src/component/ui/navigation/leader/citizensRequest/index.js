import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Content } from "../../../containers";
import { ScrollView } from "react-native-gesture-handler";
import { getAllVillageCitizensRequest } from "../../../../../redux/actions/leaderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../../loader/loader";
import ModalPoup from "../../../../modal";
import { PrimaryButton } from "../../../../buttons";
import { acknowledgeCitizensRequest } from "../../../../../redux/actions/leaderAction";
import { Toast } from "../../../../../component/toaster";

const CitizensRequest = () => {
  const dispatch = useDispatch();
  const { citizens, isLoading, initialLoading, showLeaderToast } = useSelector((state) => state.leader);
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handlePress = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const acknowledge = () => {
    dispatch(acknowledgeCitizensRequest(selectedItem.userId));
  };
  useEffect(() => {
    dispatch(getAllVillageCitizensRequest());
    if(initialLoading){
      setShowModal(false);
    }
  }, [initialLoading]);

  return (
    <Container>
      <Loader visible={isLoading} />
      <MainHeader>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", marginHorizontal: 20 }}>
            Acknowledge Citizens Request
          </Text>
        </View>
      </MainHeader>
      <View style={styles.content}>
        <Content>
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
                  <Text>{request?.useraddr?.user?.lastName} {request?.useraddr?.user?.firstName}</Text>
                  <AntDesign name="rightcircle" size={24} color="#FFA726" />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Content>
      </View>
      <ModalPoup visible={showModal}>
        <View style={{ marginVertical: 40 }}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Names: {selectedItem?.useraddr?.user?.lastName} {selectedItem?.useraddr?.user?.firstName}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            ID: {selectedItem?.useraddr?.user?.ID}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Telephone: {selectedItem?.useraddr?.user?.phoneNumber}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <PrimaryButton title="cancel" onPress={() => setShowModal(false)} />
            <PrimaryButton title="Acknowledge" onPress={() => acknowledge()} />
          </View>
        </View>
      </ModalPoup>
      <Toast
        shown={showLeaderToast}
        message={"A citizen acknowledged successfully"}
      />
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

export default CitizensRequest;
