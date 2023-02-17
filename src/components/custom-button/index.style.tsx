import { StyleSheet } from 'react-native';
import { UID } from '../../utils/screen_util';

const Style = StyleSheet.create({
    container: { width: "100%", height: UID(40), borderRadius: UID(10), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
})

export default Style;