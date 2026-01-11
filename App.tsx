import RootNavigator from "./src/screen/RootNavigator"
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}

export default App;