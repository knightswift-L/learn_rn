import { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Scalfold, CustomInput, CustomButton, AppBar } from '../../../components/index';
import { StatckOptions } from '../../../routes/types';
import { MeStackOptions } from '../../main/home';
import Style from './index.style';
export default function UpdateNickNamePage({ navigation }: NativeStackScreenProps<MeStackOptions, 'UpdateNickName'>): JSX.Element {
    return <Scalfold appBar={<AppBar title='更新昵称' canPop={false} />}>
        <View style={Style.container}>
            <CustomInput hint='请输入您的昵称' onChange={(value) => { }} value="" />
            <CustomButton onPress={() => { }} title="确认" />
        </View>
    </Scalfold>
}