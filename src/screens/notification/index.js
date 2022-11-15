import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MainHeader } from '../../component/header';
import { Container, Content } from '../../component/ui/containers';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const navigation = useNavigation();
    return(
        <Container>
            <MainHeader>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10
              }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{color: '#fff', marginHorizontal:20}}>Notifications</Text>
              </View>
            </MainHeader>
            <Content>
            <View style={styles.notification_card}>
              <Image
                source={require("../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>
            </Content>
        </Container>
    )
}


const styles = StyleSheet.create({
    notification_card: {
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
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        width: "90%",
        height: 70,
        padding: 10,
        margin: 5,
      },
});
export default Notification;

