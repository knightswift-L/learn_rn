
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StatusBar, Text, View } from 'react-native';
import { HomeStackOptions } from '..';
import { AppBar } from '../../../../components';
import { TabOptions } from '../../../../routes/types';


export function ListFragment({ }: BottomTabScreenProps<HomeStackOptions, "ListPage">): JSX.Element {
    return <View>
        <AppBar title='' canPop={false} />
    </View>
}