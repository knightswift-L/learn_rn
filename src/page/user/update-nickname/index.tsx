import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { updateUserInfo } from '../../../api/user';
import { Scalfold, CustomInput, CustomButton, AppBar } from '../../../components/index';
import { StatckOptions } from '../../../routes/types';
import Style from './index.style';
export default function UpdateNickNamePage({ navigation }: NativeStackScreenProps<StatckOptions, 'UpdateNickName'>): JSX.Element {
    const [nickName, setNickName] = useState<string>();
    const submit = useCallback(() => {
        updateUserInfo({ "nickName": nickName }).then((value) => {

        }).catch(() => { });

    }, [])


    return <Scalfold appBar={<AppBar title='更新昵称' canPop={false} />}>
        <View style={Style.container}>
            <CustomInput hint='请输入您的昵称' onChange={(value) => {
                setNickName(value);
            }} value="" />
            <CustomButton onPress={submit} title="确认" />
        </View>
    </Scalfold>
}