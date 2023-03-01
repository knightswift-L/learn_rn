import { StyleSheet } from 'react-native';
import { UID } from '../../utils/screen_util';
const style = StyleSheet.create({
    container: {
        paddingVertical: UID(10), paddingHorizontal: UID(20), backgroundColor: "#f4f4f4", borderRadius: UID(10), flexDirection: "row", alignItems: 'flex-start',
    }
});
export default style;