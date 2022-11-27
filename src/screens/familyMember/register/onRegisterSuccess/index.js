import Action from "../../../../layout/screenWithAction";
import { useNavigation } from "@react-navigation/native";

const RequestSuccess = () => {
    const navigation = useNavigation();
    return (
        <Action 
            title="Request was done Successfully"
            description="Back to home screen"
            action="Back"
            proceed={()=> navigation.navigate('umuturage')}
        >
        </Action>
    )
}
export default RequestSuccess;

