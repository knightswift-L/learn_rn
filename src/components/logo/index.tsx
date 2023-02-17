import { Text } from 'react-native';
import { UID } from '../../utils/screen_util';
// import Style from './index.style';
export function Logo(): JSX.Element {
    return <Text style={{ fontWeight: "700", fontSize: UID(60), color: "black" }}>Time line</Text>
}