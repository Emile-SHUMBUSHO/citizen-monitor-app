import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import ModalPoup from "../../../component/modal";
import { leftAndJoinHistory } from "../../../redux/actions/displacementAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../component/loader/loader";
import { useEffect, useState } from "react";

const MigrationHistory = ({ visible, setVisible }) => {
  const { isLoading, migrationHistory } = useSelector(
    (state) => state.displacement
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leftAndJoinHistory());
  }, []);
  return (
    <>
      <ModalPoup visible={visible}>
        <Loader visible={isLoading} />
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require("../../../../assets/x.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {migrationHistory?.map((item) => {
        
                item?.starting?.map((item)=>{
                    return (
                        <Text>dhhdshdhs</Text>
                    )
                })
            
          })}
        </ScrollView> */}
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
      </ModalPoup>
    </>
  );
};

export default MigrationHistory;
