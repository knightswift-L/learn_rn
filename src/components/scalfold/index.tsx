import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Style from './index.style';
import { StatusBarHeight } from '../../utils/screen_util'
interface ScalfoldProps {
    appBar?: JSX.Element;
    backgroundColor?: any;
    children?: React.ReactNode;
}
function Scalfold(props: ScalfoldProps): JSX.Element {
    const { backgroundColor, appBar, children } = props;
    return (<View style={{ backgroundColor: backgroundColor ?? "white", paddingTop: appBar ? 0 : StatusBarHeight, flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center', width: '100%', height: '100%' }}>
        {!appBar && <StatusBar translucent={true} backgroundColor={"white"} barStyle={"dark-content"} />}
        {children && children}
    </View>);
}

export default Scalfold;