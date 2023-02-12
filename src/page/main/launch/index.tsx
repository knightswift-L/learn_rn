import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import AppBar from '../../../components/app-bar';
import GlobalData from '../../../config/global';
import { Home } from '../../../routes/route';
import { StatckOptions } from '../../../routes/types';
function LaunchPage({ navigation }: NativeStackScreenProps<StatckOptions, "Launch">): JSX.Element {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    useEffect(() => {
        let internal = setTimeout(() => {
            if (isLogin) {
                navigation.replace("Login");
            } else {
                navigation.replace("Login");
            }
        }, 2000);
        if (GlobalData.token != null) {
            setIsLogin(true)
        }
        return () => clearInterval(internal);
    }, [isLogin])
    return (<View style={{ backgroundColor: "red", height: '100%', width: '100%' }}>
        <AppBar title='LaunchPage' />
    </View>);
}

export default LaunchPage;