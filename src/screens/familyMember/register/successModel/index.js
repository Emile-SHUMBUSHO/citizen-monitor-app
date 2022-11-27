import { View, Image, TouchableOpacity, Text } from 'react-native';
import ModalPoup from '../../../../component/modal';
import { PrimaryButton } from "../../../../component/buttons/";
import { useNavigation } from '@react-navigation/native';

const ConfirmLeft = ({visible, setVisible}) => {
    const navigation = useNavigation();
    return(
        <>
        <ModalPoup visible={visible}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
                onPress={() => setVisible(false)}
            >
                <Image
                source={require("../../../../../assets/x.png")}
                style={{ height: 20, width: 20 }}
                />
            </TouchableOpacity>
            </View>
            <Text>Usanzwe ubaruye mu mudugudu wa Kabeza</Text>
            <PrimaryButton title="want to left ?" onPress={()=> navigation.navigate('success')}/>
        </ModalPoup>
    </>
    )
}
export default ConfirmLeft;