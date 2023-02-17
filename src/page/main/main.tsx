import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import LaunchPage from "./launch";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, HomePageProps } from "./home";
import { StatckOptions } from "../../routes/types";
import { LoginPage } from "../authenticate/login";
import { RegisterPage } from "../authenticate/register";
import { ResetPasswordPage } from "../authenticate/reset_password";
import UpdateNickNamePage from "../user/update-nickname";

const Stack = createNativeStackNavigator<StatckOptions>();

export default function App(): JSX.Element {
    return (<NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={"Launch"}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
            <Stack.Screen name="Launch" component={LaunchPage} />
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
    </NavigationContainer>);
}