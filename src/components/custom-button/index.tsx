import { TouchableOpacity, View, Text, ColorValue } from 'react-native';
import { UID } from '../../utils/screen_util';
import Style from './index.style';
type CustomButtonIProps = {
    title: String,
    onPress: () => void,
    backgroundColor?: ColorValue,
    textColor?: ColorValue,
    marginTop?: number
}
export function CustomButton({ onPress, backgroundColor, marginTop, title }: CustomButtonIProps): JSX.Element {
    return <TouchableOpacity onPress={onPress} style={{ marginTop: marginTop ?? UID(30), width: "100%", }}>
        <View style={[Style.container, { backgroundColor: backgroundColor ?? "gray" }]}>
            <Text style={{ fontSize: UID(18), color: 'white' }}>{title}</Text>
        </View>
    </TouchableOpacity>
}