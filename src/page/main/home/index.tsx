import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import AppBar from '../../../components/app-bar';
import { StatckOptions } from '../../../routes/types';

export type HomePageProps = {
    id: String
}

export function HomePage({ navigation, route: { params: { id } } }: NativeStackScreenProps<StatckOptions, 'Home'>): JSX.Element {
    return (
        <View>
            <AppBar title='Home' />
            <Text>{id}</Text>
        </View>
    );
}