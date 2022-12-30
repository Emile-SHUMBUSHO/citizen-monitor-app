import AsyncStorage from '@react-native-async-storage/async-storage';
export const userInfo = async () => {
    try {
      const res = await AsyncStorage.getItem('AuthData');
      const profile = JSON.parse(res).profile;
      const user = JSON.parse(res).user;
      const token = JSON.parse(res).token;
      const userData = {
        'user': user,
        'profile': profile,
        'token': token
      }
      return userData;
    } catch (error) {
        console.log(error);
    }
  };
