import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { register } from '../../../api/authentication';
import { AppBar, CustomButton, CustomInput, Logo, Scalfold } from '../../../components';
import { StatckOptions } from '../../../routes/types';
import { UID } from '../../../utils/screen_util';


export function RegisterPage({ navigation }: NativeStackScreenProps<StatckOptions, 'Register'>): JSX.Element {
    const [category, setCategory] = useState<"phone" | "email">("phone");
    let password = "";
    let confirmPassword = "";
    let phone = "";
    let email = "";

    const submit = useCallback(() => {
        register({ phone, email, password }).then((response) => {
            navigation.goBack();
        });
    }, []);

    return <Scalfold backgroundColor={"white"}>
        <View style={{ paddingHorizontal: UID(20), flexDirection: 'column', justifyContent: "flex-start", flex: 1, width: "100%", marginTop: `${100 - 61.8}%` }}>
            <View style={{ marginBottom: UID(40) }}>
                <Logo />
            </View>
            <CustomInput value={category == "phone" ? phone : email} onChange={(value) => {
                email = "";
                phone = "";
                if (category == "email") {
                    email = value;
                } else {
                    phone = value;
                }
            }} hint={`请输入您的${category == "phone" ? "电话号码" : "邮箱"}`} />
            <CustomInput value={password} onChange={(value) => {
                password = value;
            }} marginTop={UID(10)} hint="请输入您的密码" />
            <CustomInput value={password} onChange={(value) => {
                confirmPassword = value;
            }} marginTop={UID(10)} hint="请确认您的密码" />
            <CustomButton onPress={() => {
                submit();
            }} title="注册" />
            <TouchableOpacity style={{ marginTop: UID(10), alignSelf: 'flex-end' }} onPress={() => {
                setCategory(category == "phone" ? "email" : "phone")
            }}>
                <Text>用{category == "phone" ? "邮箱" : "电话号码"}注册</Text>
            </TouchableOpacity>
        </View>
    </Scalfold >
}