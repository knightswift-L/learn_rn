import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { Alert, Modal, TouchableOpacity, View } from 'react-native';
import { getUserInfo, updateUserInfo } from '../../../api/user';
import { Scalfold, CustomInput, CustomButton, AppBar } from '../../../components/index';
import { useCustomUser } from '../../../provider/useUser';
import { StatckOptions } from '../../../routes/types';
import { Result } from '../../../types/common';
import { UserInfoRes } from '../../../types/user-info-res';
import Style from './index.style';
export default function UpdateNickNamePage({ navigation }: NativeStackScreenProps<StatckOptions, 'UpdateNickName'>): JSX.Element {
    const { user, setUser } = useCustomUser();
    let nickName = user?.nickName ?? "";
    const submit = useCallback(() => {
        updateUserInfo<Result<any>>({ "nickName": nickName }).then((value) => {
            if (value.code == 200) {
                return true;
            } else {
                throw Error()
            }
        }).then(() => {
            return getUserInfo<Result<UserInfoRes>>();
        }
        ).then((value) => {
            if (value.code == 200) {
                setUser(value.data ?? null);
                navigation.goBack();
            }
        }).catch(() => { });

    }, [])
    return <View>
        <Scalfold appBar={<AppBar title='更新昵称' />}>
            <View style={Style.container}>
                <CustomInput hint='请输入您的昵称' onChange={(value) => {
                    nickName = value;
                }} value={nickName} />
                <CustomButton onPress={submit} title="确认" />
            </View>
        </Scalfold>
    </View>
}