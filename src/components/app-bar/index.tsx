import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import Style from './index.style';
interface AppBarIProps {
    title: string;
    statusColor?: string
}

function AppBar(props: AppBarIProps): JSX.Element {
    const { title, statusColor } = props;
    return <View style={Style.container}>
        {Platform.OS == 'android' && <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={statusColor ?? 'white'} />}
        <View style={{ ...Style.barContainer, backgroundColor: statusColor }}>
            <Text>{title}</Text>
        </View>
    </View>
}
export default AppBar;