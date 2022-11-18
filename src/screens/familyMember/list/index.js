import { Text, StyleSheet,View, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { Card } from 'react-native-paper';
import ModalPoup from '../../../component/modal';
const FamilyMember = ({visible, setVisible}) => {
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Abahagarariye umuryango</Text>
                <Card style={styles.card}>
                    <Text>Mike Kalisa : umukuru w'umuryango</Text>
                    <Text>Muhoza Ange: uwo bashakanye</Text>
                </Card>
                <Text style={styles.title}>Abana</Text>
                <Card style={styles.card}>
                    <Text>Mike Kalisa</Text>
                    <Text>Muhoza Ange</Text>
                </Card>
                <Text style={styles.title}>Relatives</Text>
                <Card style={styles.card}>
                    <Text>Mike Kalisa</Text>
                    <Text>Muhoza Ange</Text>
                </Card>
                <Text style={styles.title}>Others</Text>
                <Card style={styles.card}>
                    <Text>Mike Kalisa</Text>
                    <Text>Muhoza Ange</Text>
                </Card>
            </ScrollView>
        </ModalPoup>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
    card: {
        padding: 10,
        marginVertical: 20
    }
})
export default FamilyMember;

