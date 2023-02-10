import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import LaunchPage from "./launch";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, HomePageProps } from "./home";
import { StatckOptions } from "../../routes/types";
import { Launch, Home } from "../../routes/route";

const Stack = createNativeStackNavigator<StatckOptions>();

export default function App(): JSX.Element {
    return (<NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Launch">
            <Stack.Screen name={Launch} component={LaunchPage} />
            <Stack.Screen name={Home} component={HomePage} />
        </Stack.Navigator>
    </NavigationContainer>);
}