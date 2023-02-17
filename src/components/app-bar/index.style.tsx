import { StyleSheet } from 'react-native';
import { UID, StatusHeight } from '../../utils/screen_util';

const style = StyleSheet.create({
    container: {
        height: StatusHeight,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    barContainer: {
        height: UID(44),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: UID(18),
        fontWeight: "500",
        color: 'black'
    }
});

export default style;