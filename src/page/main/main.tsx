import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import LaunchPage from "./launch";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from "./home";
import { StatckOptions } from "../../routes/types";
import { LoginPage } from "../authenticate/login";
import { RegisterPage } from "../authenticate/register";
import { ResetPasswordPage } from "../authenticate/reset_password";
import UpdateNickNamePage from "../user/update-nickname";
import { CustomUserProvider, useCustomUser } from "../../provider/useUser";
import { CategoryPage } from "../category";

const Stack = createNativeStackNavigator<StatckOptions>();

export default function App(): JSX.Element {
    return (<CustomUserProvider>
        <RouteContainer />
    </CustomUserProvider>);
}


function RouteContainer(): JSX.Element {
    const { user, setUser } = useCustomUser();
    console.log("=======================>", user);
    const [checking, setChecking] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setChecking(false);
        }, 2000)
    })
    if (checking) {
        return <LaunchPage />
    }
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={user != null ? "Home" : "Login"}>
            {user == null ? (
                <>
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="Register" component={RegisterPage} />
                    <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
                </>
            ) : (<>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="UpdateNickName" component={UpdateNickNamePage} />
                <Stack.Screen name="CategoryPage" component={CategoryPage} />
            </>)}

        </Stack.Navigator>
    </NavigationContainer>;
}