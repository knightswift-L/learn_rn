import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageRequireSource, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { add, back } from '../../assets';
import { screenWidth, UID } from '../../utils/screen_util';
import Style from './index.style';
interface ActionViewProps {
    icon: ImageRequireSource,
    onTap: () => void;
}

export function ActionView({ icon, onTap }: ActionViewProps) {
    return <TouchableOpacity onPress={onTap}>
        <View style={{ width: UID(35), height: UID(35), flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
            <Image source={icon} style={{ height: UID(30), width: UID(30) }} />
        </View>
    </TouchableOpacity>
}

interface AppBarIProps {
    title: string;
    statusColor?: string,
    actions?: Array<React.ReactNode>
}
export function AppBar(props: AppBarIProps): JSX.Element {
    const navigation = useNavigation();
    const { title, statusColor, actions } = props;
    let maginHorizonal = UID(64);
    let actionsWidth = 0;
    let actionsView = Array();
    if (actions) {
        actionsWidth = UID(44) * actions.length + UID(10) * (actions.length - 1);
        maginHorizonal = UID(20) + actionsWidth;
        for (let index = 0; index < actions.length; index++) {
            actionsView.push(<View key={`actionBar${index}`} style={{ height: UID(44), width: UID(44), marginRight: index == actions.length - 1 ? 0 : UID(10), flexDirection: "column", justifyContent: "center" }}>
                {actions[index]}
            </View>)
        }
    }
    return <View style={Style.container}>
        {Platform.OS == 'android' && <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={statusColor ?? 'white'} />}
        <View style={{ ...Style.barContainer, backgroundColor: statusColor }}>
            {navigation.canGoBack() && <View style={{ position: "absolute", left: UID(10), height: UID(35), width: UID(35) }}>
                <ActionView icon={back} onTap={() => {
                    navigation.goBack();
                }} />
            </View>}
            <View style={{ position: "absolute", left: maginHorizonal, right: maginHorizonal, height: UID(44), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={Style.title}>{title ?? ""}</Text>
            </View>
            {actions && <View style={{ position: 'absolute', right: UID(10), width: actionsWidth, height: UID(44), flexDirection: "row" }}>
                {actionsView}
            </View>}
        </View>
    </View >
}