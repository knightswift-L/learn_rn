import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { StatckOptions } from '../../../routes/types';
import { UID } from '../../../utils/screen_util';
import { login } from '../../../api/authentication'
import { LoginRes } from '../../../types/login-res';
import GlobalData from '../../../config/global';
import { CustomButton, CustomInput, Logo, Scalfold } from '../../../components';
import { Result } from '../../../types/common';
export function LoginPage({ navigation }: NativeStackScreenProps<StatckOptions, 'Login'>): JSX.Element {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const submit = useCallback(() => {
        if (account != "" && password != "") {
            login<Result<LoginRes | null>>({ account, password }).then((response) => {
                if (response.code == 200 && response.data) {
                    let token = response.data?.token!;
                    GlobalData.token = token;
                    navigation.replace("Home")
                }
            }).catch((error) => {
                console.log(JSON.stringify(error))
            })
        }
    }, [account, password]);

    return <Scalfold backgroundColor={"white"}>
        <View style={{ paddingHorizontal: UID(20), flexDirection: 'column', justifyContent: "flex-start", flex: 1, width: "100%", marginTop: `${100 - 61.8}%` }}>
            <View style={{ marginBottom: UID(40) }}>
                <Logo />
            </View>
            <CustomInput value={account} onChange={(value) => {
                setAccount(value);
            }} hint="请输入您的账号" />
            <CustomInput value={password} onChange={(value) => {
                setPassword(value);
            }} marginTop={UID(10)} hint="请输入您的密码" />
            <CustomButton onPress={() => {
                submit();
            }} title="登录" />
            <TouchableOpacity style={{ marginTop: UID(10), alignSelf: 'flex-end' }} onPress={() => {
                navigation.navigate("Register")
            }}>
                <Text>没有账号?去注册</Text>
            </TouchableOpacity>
        </View>
    </Scalfold >
}