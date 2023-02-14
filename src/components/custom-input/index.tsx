import { TextInput, View } from 'react-native';
import { useCallback, useState } from 'react';
import { UID } from '../../utils/screen_util';
import Style from './index.style';
type CustomInputIProps = {
    value: string | undefined
    onChange: (value: string) => void,
    hint?: string,
    marginTop?: number
}
export function CustomInput({ value, onChange, hint, marginTop }: CustomInputIProps): JSX.Element {
    const [currentValue, setValue] = useState<string>(value ?? "")
    const onTextChange = useCallback((value: string) => {
        setValue(value)
        onChange(value);
    }, [currentValue])
    return <View style={[Style.container, { marginTop: marginTop ?? 0 }]}>
        <TextInput value={currentValue} style={{ fontSize: UID(16), color: 'black', flex: 1, padding: UID(0) }} onChangeText={onTextChange} maxLength={100} placeholder={hint ?? "请输入"} />
    </View>
}