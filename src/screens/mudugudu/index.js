import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../layout/main";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import {
  approveCitizen,
  approveLeaveAndJoin,
} from "../../redux/actions/displacementAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../component/loader/loader";
import { userInfo } from "../../utils/userInfo";

const Home = () => {
  const navigation = useNavigation();
  const { isLoading } = useSelector((state) => state.displacement);
  const [userInformations, setUserInformations] = useState();
  const dispatch = useDispatch();
  const approveCitizenFunc = () => {
    dispatch(approveCitizen(userInformations?.profile?.id));
  };
  const approveLeaveAndJoinFunc = () => {
    dispatch(approveLeaveAndJoin(userInformations?.profile?.id));
  };
  useEffect(() => {
    userInfo().then((response) => {
      setUserInformations(response);
    });
  }, []);
  return (
    <HomeWrapper
      title="Hello, John"
      navigation={() => navigation.navigate("notification")}
    >
      <Loader visible={isLoading} />
      <Text style={styles.text}>Murakaza neza kuri, Citizen Monitor APP</Text>
      <Text>Menya amakuru y'umudugudu uyobora</Text>
      <Text>
        Fasha abaturage uyobora kumenyekanisha imyirondoro yabo mu mudugudu
        batuyemo, ndetse no kumenyekanisha imyirondoro yabo mu mudugudu
        bimukiyemo
      </Text>
      <Text></Text>
      <View
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
        <View>
          <Text>Approve first entry</Text>
        </View>
        {/* <TouchableOpacity onPress={()=> navigation.navigate('migrate')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity> */}

        <TouchableOpacity onPress={() => approveCitizenFunc()}>
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
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
        <View>
          <Text>Approve left and join a village</Text>
        </View>
        {/* <TouchableOpacity onPress={()=> navigation.navigate('vistor')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity> */}

        <TouchableOpacity onPress={() => approveLeaveAndJoinFunc()}>
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={{ marginVertical: 20, fontSize: 18, fontWeight: "700" }}>
        Your current residence
      </Text>
      <Card>
        <View style={{ padding: 10 }}>
          <Text>Kigali, City</Text>
          <Text>Nyarugenge, District</Text>
          <Text>Nyamirambo, Sector</Text>
          <Text>Kivugiza, Cell</Text>
          <Text>Bwiza, Village</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>Mudugudu, Cheif: Masirabo Didie</Text>
          <AntDesign name="rightcircle" size={24} color="black" />
        </View>
      </Card>
    </HomeWrapper>
  );
};
const styles = StyleSheet.create({
  // text: {
  //     color: 'black',
  // }
});

export default Home;
