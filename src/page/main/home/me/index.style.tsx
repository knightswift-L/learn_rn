import { StyleSheet } from 'react-native';
import { UID } from '../../../../utils/screen_util';

const Style = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: UID(15)
    },
    avatar: { height: UID(50), width: UID(50), borderRadius: UID(25), backgroundColor: 'gray' },
    headerRightContainer: {
        height: UID(50),
        marginLeft: UID(10),
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-evenly",
    }
})

export default Style;