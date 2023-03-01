import { StyleSheet } from 'react-native';
import { UID, StatusHeight, screenWidth } from '../../utils/screen_util';

const style = StyleSheet.create({
    container: {
        height: StatusHeight,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: screenWidth
    },
    barContainer: {
        width: screenWidth,
        height: UID(44),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: UID(10),
    },
    title: {
        fontSize: UID(18),
        fontWeight: "500",
        color: 'black'
    },
});

export default style;