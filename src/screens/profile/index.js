import { Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";
import { Container, Content } from "../../component/ui/containers";
import { MainHeader } from "../../component/header";
import {
    Feather,
    MaterialIcons,
    FontAwesome5,
    Ionicons,
  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <MainHeader>
                <Image source={require('../../../assets/profile.webp')} style={{width: 50, height: 50, borderRadius:30}}/>
                <Text style={{color: '#fff', paddingHorizontal: 100}}>SHUMBUSHO Emile</Text>
            </MainHeader>
            <Content>
                <TouchableOpacity
                style={styles.touchableOpacity}
            >
                <Ionicons name="md-settings-outline" size={24} color="black" />
                <Text style={{ left: 10 }}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity}>
                    <MaterialIcons name="live-tv" size={24} color="black" />
                    <Text style={{ left: 10 }}>Tutorial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity}>
                    <Feather name="star" size={24} color="black" />
                    <Text style={{ left: 10 }}>Rate Us</Text>
                </TouchableOpacity>

                <View
                    style={{
                    width: "90%",
                    height: 1,
                    backgroundColor: "black",
                    margin: 10,
                    }}
                />

                <TouchableOpacity style={styles.touchableOpacity}>
                    <FontAwesome5 name="question-circle" size={24} color="black" />
                    <Text style={{ left: 10 }}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity}>
                    <Feather name="share-2" size={24} color="black" />
                    <Text style={{ left: 10 }}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={()=> navigation.navigate('login')}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={{ left: 10 }}>Log Out</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
      flexDirection: "row",
      margin: 10,
    },
  });

export default Profile;