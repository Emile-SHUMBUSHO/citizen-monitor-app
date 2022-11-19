import Action from "../../../layout/screenWithAction";
import { useNavigation } from "@react-navigation/native";

const RegisterSuccess = () => {
    const navigation = useNavigation();
    return (
        <Action 
            title="Registration was done Successfully"
            description="Please click on Get Started buttom below to complete your registration Process"
            action="Get Started"
            proceed={()=> navigation.navigate('completeRegisteration')}
        >
        </Action>
    )
}
export default RegisterSuccess;