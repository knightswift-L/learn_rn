import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Button, View, Image } from 'react-native';
import { launch_background } from '../../../assets';
import { Logo } from '../../../components';
import GlobalData from '../../../config/global';
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
    }, [])
    return (<View style={{ backgroundColor: "white", height: '100%', width: '100%', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
        <Image source={launch_background} style={{ height: '100%', width: '100%', }} />
        <View style={{ position: "absolute", top: '45%', left: 'auto' }}>
            <Logo />
        </View>
    </View>);
}

export default LaunchPage;