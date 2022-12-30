import { Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";
import { Container, Content } from "../../component/ui/containers";
import { MainHeader } from "../../component/header";
import FamilyVistor from "../vistors/list";
import FamilyMember from "../familyMember/list";
import MigrationHistory from "../migrate/history";
import {
    Feather,
    MaterialIcons,
    FontAwesome5,
    FontAwesome,
    Ionicons,
    AntDesign,
  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Profile = () => {
    const navigation = useNavigation();
    const [vistorVisible, setVistorVisible] = useState(false);
    const [familyVisible, setFamilyVisible] = useState(false);
    const [migrateHistoryVisible, setMigrateHistoryVisible] = useState(false);
    const dispatch = useDispatch();
    const logutUser = ()=>{
        dispatch(Logout());

    }
    return (
        <Container>
            <MainHeader>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10}}>
                    <Image source={require('../../../assets/profile.webp')} style={{width: 50, height: 50, borderRadius:30}}/>
                    <Text style={{color: '#fff', paddingHorizontal: 10}}>SHUMBUSHO Emile</Text>
                </View>
            </MainHeader>
            <Content>
                <TouchableOpacity
                onPress={()=> navigation.navigate('settings')}
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
                    <FontAwesome5 name="question-circle" size={24} color="black" />
                    <Text style={{ left: 10 }}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity}>
                    <Feather name="share-2" size={24} color="black" />
                    <Text style={{ left: 10 }}>Share</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity} onPress={()=> navigation.navigate('mutwaraSibo')}>
                    <Text style={{ left: 10 }}>Mutwara sibo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity} onPress={()=> navigation.navigate("mudugudu")}>
                    <Text style={{ left: 10 }}>Mudugudu</Text>
                </TouchableOpacity>
                <View
                    style={{
                    width: "90%",
                    height: 1,
                    backgroundColor: "black",
                    margin: 10,
                    }}
                />

                <TouchableOpacity style={styles.touchableOpacity} onPress={()=> setFamilyVisible(true)}>
                    <MaterialIcons name="family-restroom" size={24} color="black" />
                    <Text style={{ left: 10 }}>Abagize umuryango</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={()=> setVistorVisible(true)}>
                    <AntDesign name="addusergroup" size={24} color="black" />
                    <Text style={{ left: 10 }}>Abashyitsi mu muryango</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={()=> setMigrateHistoryVisible(true)}>
                    <FontAwesome name="line-chart" size={24} color="black" />
                    <Text style={{ left: 10 }}>Migration history</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={logutUser}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={{ left: 10 }}>Log Out</Text>
                </TouchableOpacity>
                <FamilyMember 
                    visible={familyVisible}
                    setVisible={setFamilyVisible}
                />
                <FamilyVistor
                    visible={vistorVisible}
                    setVisible={setVistorVisible}
                />
                <MigrationHistory 
                    visible={migrateHistoryVisible}
                    setVisible={setMigrateHistoryVisible}
                />
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