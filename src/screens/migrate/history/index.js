import {
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import ModalPoup from "../../../component/modal";


const MigrationHistory = ({ visible, setVisible }) => {
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
      </ModalPoup>
    </>
  );
};

export default MigrationHistory;
