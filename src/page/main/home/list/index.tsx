
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StatusBar, Text, View } from 'react-native';
import { AppBar } from '../../../../components';
import { StatckOptions } from '../../../../routes/types';


export function ListFragment({ navigation, route }: BottomTabScreenProps<StatckOptions, "HomePage">): JSX.Element {
    return <View>
        <AppBar title='' canPop={false} />
    </View>
}