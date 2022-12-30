import AppNavigator from "./src/navigation/app";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
