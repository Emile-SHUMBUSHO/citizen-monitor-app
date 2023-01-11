import { View, Image, TouchableOpacity, Text } from "react-native";
import ModalPoup from "../../../../../component/modal";
import { PrimaryButton } from "../../../../buttons";

const CitizenModal = ({ visible, setVisible }) => {
  return (
    <>
      <ModalPoup visible={visible}>
        <View style={{marginVertical:40}}>
          <Text style={{textAlign:"center", fontSize:18}}>
            Are you sure you want to appoint Emile SHUMBUSHO as a village chef
            of Muhabura
          </Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <PrimaryButton title="Cancel" onPress={() => setVisible(false)} />
            <PrimaryButton title="Ok" onPress={() => setVisible(true)} />
          </View>
        </View>
      </ModalPoup>
    </>
  );
};
export default CitizenModal;
