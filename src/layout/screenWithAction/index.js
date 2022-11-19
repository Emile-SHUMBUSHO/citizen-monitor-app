import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PrimaryButton } from '../../component/buttons';
import { useNavigation } from '@react-navigation/native';

const Action = (props) => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        {props.goBack && 
        <View style={styles.TopComponent}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate(props.goBack)}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        </View>
        }
        <View style={styles.content}>
          <View style={styles.circle}>
            <Image
              source={props.imageUrl}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <Text style={[styles.title, { fontWeight: 'bold', fontSize: 18, margin: 10, color: 'black'}]}>
            {props.title}
          </Text>
          <Text
            style={[styles.introTitle, {
              fontWeight: 'bold',
              fontSize: 18,
              margin: 5,
              textAlign: 'center',
              color: 'black',
            }]}>
            {props.description}
          </Text>
          <PrimaryButton onPress={props.proceed} title={props.action}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TopComponent: {
      padding: 10,
      backgroundColor: '#EEF1F6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    backButton: {
      align: 'left',
      width: 30,
    },
    content: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '50%'
    },
    circle: {
      fledDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      width: 120,
      height: 120,
      borderRadius: 100,
      alignSelf: 'center',
    },
    title:{
      textAlign: 'center',
    },
    btn:{
      marginVertical: 10
    }
  });
  
export default Action;