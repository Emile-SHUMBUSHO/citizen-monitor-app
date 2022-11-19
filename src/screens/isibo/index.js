import React from "react";
import { Container, Content } from "../../component/ui/containers";
import { MainHeader } from "../../component/header";
import { Text, View, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Citizens = () => {
    return (
        <Container>
            <MainHeader>
            </MainHeader>
            <Content>
                <View style={{
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
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: 5,
                        padding: 10,
                        marginVertical: 20
                    }}>
                        <View>
                            <Text>New Request</Text>
                            <Text>Tanga uburenganzira kubaturage bashya mukwimenyekanisha mw'isibo uyobora</Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign name="rightcircle" size={24} color="black" />
                        </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}

export default Citizens;