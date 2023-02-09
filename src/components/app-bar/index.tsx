import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import Style from './index.style';
function AppBar(): JSX.Element {

    return <View style={Style.container}>
        {Platform.OS == 'android' && <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'} />}
        <View style={Style.barContainer}></View>
    </View>
}
export default AppBar;