import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import CustomButton from '../../../components/custom-button';
import { CustomInput } from '../../../components/custom-input';
import Scalfold from '../../../components/scalfold';
import { StatckOptions } from '../../../routes/types';
import { UID } from '../../../utils/screen_util';
import { login } from '../../../api/authentication'
import { LoginRes } from '../../../types/login-res';
import GlobalData from '../../../config/global';
export function LoginPage({ navigation }: NativeStackScreenProps<StatckOptions, 'Login'>): JSX.Element {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const submit = useCallback(() => {
        login<LoginRes | null>({ account, password }).then((response) => {
            if (response.code == 200 && response.data) {
                let token = response.data?.token!;
                GlobalData.token = token;
                navigation.replace("Home", {})
            }
        }).catch((error) => {
            console.log(JSON.stringify(error))
        })
    }, [account, password]);

    return <Scalfold backgroundColor={"white"}>
        <View style={{ paddingHorizontal: UID(20), flexDirection: 'column', justifyContent: "center", flex: 1, width: "100%" }}>
            <CustomInput value={account} onChange={(value) => {
                setAccount(value);
            }} />
            <CustomInput value={password} onChange={(value) => {
                setPassword(value);
            }} marginTop={UID(10)} />
            <CustomButton onPress={() => {
                submit();
            }} />
        </View>
    </Scalfold >
}