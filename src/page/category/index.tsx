import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { AppBar, CustomButton, CustomInput, Scalfold } from '../../components';
import { StatckOptions } from '../../routes/types';
import { UID } from '../../utils/screen_util';

export function CategoryPage({ navigation, route }: NativeStackScreenProps<StatckOptions, "CategoryPage">): JSX.Element {

    return <Scalfold appBar={<AppBar title='新增类别' />}>
        <View style={{ width: "100%", paddingHorizontal: UID(20) }}>
            <CustomInput hint='请输入分类' onChange={(value) => {
            }} value={""} marginTop={UID(10)} />
            <CustomInput hint='请输入描述' lines={5} onChange={(value) => {
            }} value={""} marginTop={UID(10)} />
            <CustomButton onPress={() => { }} title="确认" />
        </View>
    </Scalfold>;
}