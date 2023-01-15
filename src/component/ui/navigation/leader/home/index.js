import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../../../../layout/main";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import {
  approveCitizen,
  approveLeaveAndJoin,
} from "../../../../../redux/actions/displacementAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../../component/loader/loader";
import { userInfo } from "../../../../../utils/userInfo";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Content, Container } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Notification } from "../../../../notification";
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Home = () => {
  const navigation = useNavigation();
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
            onPress={() => navigation.navigate("Citizens Request")}
          />
        </View>
      </MainHeader>
      <Content>
        <Card style={{ marginVertical: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 18, margin: 15 }}>
            Murakaza neza kuri, Citizen Monitor App
          </Text>
        </Card>
        <Card style={{ marginVertical: 10 }}>
          <Text style={{ textAlign: "center", margin: 15 }}>
            Menya amakuru y'umudugudu uyobora Fasha abaturage uyobora
            kumenyekanisha imyirondoro yabo mu mudugudu batuyemo, ndetse no
            kumenyekanisha imyirondoro yabo mu mudugudu bimukiyemo.
          </Text>
        </Card>
        {/* <View
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
      > */}
        {/* <View>
          <Text>Approve first entry</Text>
        </View> */}
        {/* <TouchableOpacity onPress={()=> navigation.navigate('migrate')}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => approveCitizenFunc()}>
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity> */}
        {/* </View> */}

        {/* <View
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
      > */}
        {/* <View>
          <Text>Approve left and join a village</Text>
        </View> */}
        {/* <TouchableOpacity onPress={() => approveLeaveAndJoinFunc()}>
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity> */}
        {/* </View> */}

        {/* <Text style={{ marginVertical: 20, fontSize: 18, fontWeight: "700" }}>
        Your current residence
      </Text> */}
        {/* <Card>
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
      </Card> */}
        <ScrollView>
          <Text>View Migration Progress durin five months</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May"],
              datasets: [
                {
                  data: [234, 545, 134432, 554.322, 56566],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  // text: {
  //     color: 'black',
  // }
});

export default Home;
