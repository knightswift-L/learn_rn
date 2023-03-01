import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Style from './index.style';
import { screenWidth, StatusBarHeight } from '../../utils/screen_util'
interface ScalfoldProps {
    appBar?: React.ReactNode;
    backgroundColor?: any;
    children?: React.ReactNode;
}
export function Scalfold(props: ScalfoldProps): JSX.Element {
    const { backgroundColor, appBar, children } = props;
    return (<View style={{ backgroundColor: backgroundColor ?? "white", paddingTop: appBar ? 0 : StatusBarHeight, flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center', width: screenWidth, height: '100%' }}>
        {!appBar && <StatusBar translucent={true} backgroundColor={backgroundColor ?? "white"} barStyle={"dark-content"} />}
        {appBar && appBar}
        {children && children}
    </View>);
}