import React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeWrapper from "../../../../../layout/main";
import { AntDesign } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Home = () => {
  const navigation = useNavigation();

  return (
    <HomeWrapper
      title="Hello, Admin"
      navigation={() => navigation.navigate("notification")}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            padding: 10,
            marginVertical: 20,
            height: 100,
          }}
        >
          <AntDesign name="checkcircle" size={24} color="green" />
          <Text>6453</Text>
          <Text>Apponted Leaders</Text>
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            padding: 10,
            marginVertical: 20,
            height: 100,
          }}
        >
          <AntDesign name="checkcircle" size={24} color="green" />
          <Text>6422</Text>
          <Text>Registered Villages</Text>
        </View>
      </View>
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
    </HomeWrapper>
  );
};
const styles = StyleSheet.create({});

export default Home;
