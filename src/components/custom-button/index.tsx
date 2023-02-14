import { TouchableOpacity, View, Text, ColorValue } from 'react-native';
import { UID } from '../../utils/screen_util';
import Style from './index.style';
type CustomButtonIProps = {
    onPress: () => void,
    backgroundColor?: ColorValue,
    textColor?: ColorValue,
    marginTop?: number
}
export default function CustomButton({ onPress, backgroundColor, marginTop }: CustomButtonIProps): JSX.Element {
    return <TouchableOpacity onPress={onPress} style={{ marginTop: marginTop ?? UID(30) }}>
        <View style={[Style.container, { backgroundColor: backgroundColor ?? "gray" }]}><Text style={{ fontSize: UID(18), color: 'white' }}>登录</Text></View>
    </TouchableOpacity>
}