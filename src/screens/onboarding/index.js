import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const Onboarding = (props) =>{
    const navigation = useNavigation()
    const [showSlide, setShowSlide] = useState(false);
    const onDone = () =>{
        
     };
    const RenderItem = ({item})=>{
        return(
            <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.introTitle}>{item.introTitle}</Text>
                    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"flex-end", height:200}}>
                        {/* <TouchableOpacity style={styles.getStartedBtn} onPress={() => onDone()}>
                            <Text style={styles.getStartedTitle}>Get Started</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ImageBackground>
        );
    };

    return(
        <>
            {
                showSlide ? (
                            <SafeAreaView>
                                <View>
                                    <Text>
                                        No App into slide
                                    </Text>
                                </View>
                            <ImageBackground source={require('../../../assets/4.png') } resizeMode="cover" style={styles.image}>
                                <View style={styles.content}>
                                    <Text style={styles.title}>Enjoy your favorite movie everywhere</Text>
                                    <Text style={styles.introTitle}>Browse through our collections and discover hundreds of movies and series that you'll love</Text>
                                    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"flex-end", height:200}}>
                                        <TouchableOpacity style={styles.getStartedBtn}>
                                            <Text style={styles.getStartedTitle}>Get Started</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                            </SafeAreaView>
                            ):(
                            <AppIntroSlider
                                data={slides}
                                doneLabel="Register Now"
                                renderItem={RenderItem}
                                showSkipButton={true}
                                nextLabel={true}
                                showDoneButton={true}
                                onDone={()=>navigation.navigate("register")}
                                dotStyle={{ backgroundColor:"white", borderRadius:30, width:20, height:20}}
                                activeDotStyle={{backgroundColor:"black", borderRadius:30, width:20, height:20}}
                            />
                            )
                }
        </>
    );
};

const styles  = StyleSheet.create({
      image: {
        height:"100%",
      },
      content:{
        backgroundColor: "#000000c0",
        height:"100%",
        justifyContent:"flex-end",
      },
      title: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        padding:10,
        alignSelf: 'center',
        textAlign: 'center',

      },
      introTitle:{
        color:"grey",
        padding:10,
        fontSize:16,
        alignSelf: 'center',
        textAlign: 'center',
      },
})


const slides = [
    {
        key:1,
        title:'Citizen monitoring at umudugudu level',
        introTitle:`Rwanda is a geographically small country in Central Africa, known for being the “land of a thousand hills,” because of its beautiful scenery. It is home to more than 12 million Rwandans.`,
        image: require('../../../assets/1.jpg'),
    },
    {
        key:2,
        title:'Why citizen monitoring?',
        introTitle:`For the purpose of supporting the process of local migration system which is currently done in complex way.`,
        image: require('../../../assets/2.jpg'),
    },
    {
        key:3,
        title:'Citizen monitoring is essential to consevre human security for the national level',
        introTitle:`Once you have registered through our system your data will be well protected and become more essy to reachout to you`,
        image: require('../../../assets/4.png'),
    }
]

export default Onboarding;