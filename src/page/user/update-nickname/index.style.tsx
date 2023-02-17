import { StyleSheet } from 'react-native';
import { UID } from '../../../utils/screen_util';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        paddingHorizontal: UID(20),
    }
})

export default Style;