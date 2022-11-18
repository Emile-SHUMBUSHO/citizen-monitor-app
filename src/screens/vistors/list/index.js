import { View, Image, TouchableOpacity } from 'react-native';
import ModalPoup from '../../../component/modal';

const FamilyVistor = ({visible, setVisible}) => {
    return(
        <>
        <ModalPoup visible={visible}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
                onPress={() => setVisible(false)}
            >
                <Image
                source={require("../../../../assets/x.png")}
                style={{ height: 20, width: 20 }}
                />
            </TouchableOpacity>
            </View>
        </ModalPoup>
    </>
    )
}
export default FamilyVistor;

