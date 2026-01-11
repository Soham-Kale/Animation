import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "./Home";
import AnimationScreen from "./AnimationScreen";

export type RootStackParamList = {
    Home: undefined;
    AnimationScreenDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="AnimationScreenDemo" component={AnimationScreen}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;