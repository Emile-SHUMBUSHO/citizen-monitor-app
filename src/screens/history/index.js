import React from "react";
import { Container, Content } from "../../component/ui/containers";
import { MainHeader } from "../../component/header";
import { View, Text, FlatList } from "react-native";
import { leftAndJoinHistory } from "../../redux/actions/displacementAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../component/loader/loader";
import { useEffect, useState } from "react";

const migrationHistory = () => {
    const { isLoading, migrationHistory } = useSelector(
        (state) => state.displacement
      );
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(leftAndJoinHistory());
      }, []);
  return (
    <Container>
        <Loader visible={isLoading}/>
      <MainHeader></MainHeader>
      <Content>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>25-05-2022</Text>
          <FlatList
          data={migrationHistory}
          renderItem={({ item }) => (
            <View>
                <Text>Initial residence</Text>
              {item?.starting?.map((number) => (
                
                <Text>{number}</Text>
              ))}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </Content>
    </Container>
  );
};

export default migrationHistory;
