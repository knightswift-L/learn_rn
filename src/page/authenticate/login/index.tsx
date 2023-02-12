import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import AppBar from '../../../components/app-bar';
import Scalfold from '../../../components/scalfold';
import { StatckOptions } from '../../../routes/types';


export function LoginPage({navigation}:NativeStackScreenProps<StatckOptions, 'Login'>):JSX.Element{
    return <Scalfold>
    <View>
        <TextInput style = {{backgroundColor:"black"}} onChangeText ={(value)=>{

        }}/>
        <TextInput  style = {{backgroundColor:"black"}} onChangeText ={(value)=>{

        }}/>
    </View>
</Scalfold>
}