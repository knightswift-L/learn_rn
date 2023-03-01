
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StatusBar, Text, View } from 'react-native';
import { add } from '../../../../assets';
import { ActionView, AppBar, Scalfold } from '../../../../components';
import { StatckOptions } from '../../../../routes/types';


export function ListFragment({ navigation, route }: BottomTabScreenProps<StatckOptions, "HomePage">): JSX.Element {
    return <Scalfold appBar={<AppBar title='ListFragment' actions={[<ActionView icon={add} onTap={() => {
        navigation.navigate("CategoryPage");
    }} />]} />}>

    </Scalfold >
}