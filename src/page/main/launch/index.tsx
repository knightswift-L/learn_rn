import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View } from 'react-native';
import AppBar from '../../../components/app-bar';
import { Home } from '../../../routes/route';
import { StatckOptions } from '../../../routes/types';
function LaunchPage({ navigation }: NativeStackScreenProps<StatckOptions, "Launch">): JSX.Element {
    return (<View style={{ backgroundColor: "#1F54E0", height: '100%', width: '100%' }}>
        <AppBar title='LaunchPage' />
        <Button onPress={() => {
            navigation.replace(Home, { id: "12345666" });
        }} title="Home"></Button>
    </View>);
}

export default LaunchPage;