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
        backgroundColor: 'red'
    }
});

export default style;