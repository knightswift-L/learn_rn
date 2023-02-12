import { Dimensions, Platform, StatusBar } from 'react-native';
const size = Dimensions.get('window');
let screenWidth = size.width;
let scale = screenWidth / 375;
export const UID = (value: number) => value * scale;
export let StatusBarHeight = StatusBar.currentHeight ?? 0;
export let StatusHeight = Platform.OS == 'ios' ? UID(88) : (StatusBar.currentHeight ?? UID(44)) + UID(44);


export default {
    UID,
    StatusHeight,
};