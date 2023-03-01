import { TextInput, View } from 'react-native';
import { useCallback, useState } from 'react';
import { UID } from '../../utils/screen_util';
import Style from './index.style';
type CustomInputIProps = {
    value: string | undefined
    onChange: (value: string) => void,
    hint?: string,
    marginTop?: number,
    lines?: number
}
export function CustomInput({ value, onChange, hint, marginTop, lines }: CustomInputIProps): JSX.Element {
    const [currentValue, setValue] = useState<string>(value ?? "")
    const onTextChange = useCallback((value: string) => {
        setValue(value)
        onChange(value);
    }, [currentValue])
    return <View style={[Style.container, { marginTop: marginTop ?? 0, height: (lines ?? 1) * UID(40) }]}>
        <TextInput value={currentValue} style={{ fontSize: UID(16), color: 'black', flex: 1, padding: UID(0), height: (lines ?? 1) * UID(40) - UID(20) }} onChangeText={onTextChange} maxLength={100} multiline={lines != undefined} numberOfLines={lines ?? 1} placeholder={hint ?? "请输入"} />
    </View>
}