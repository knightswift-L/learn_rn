
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, View } from 'react-native';
import { StatckOptions, } from '../../../routes/types';
import { ListFragment } from './list';
import { MeFragment } from './me';
import { StatusBarHeight, StatusHeight, UID } from '../../../utils/screen_util';
import { to_do, to_do_selected, mine, mine_selected } from '../../../assets';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator<StatckOptions>();

function BottomBar({ state, navigation }: BottomTabBarProps) {
    return <View style={{ height: StatusHeight, width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingBottom: StatusBarHeight }}>
        {state.routes.map((value, index) => {
            let icon = to_do_selected;
            if (state.index == index) {
                icon = index == 0 ? to_do_selected : mine_selected;
            } else {
                icon = index == 0 ? to_do : mine;
            }

            return <TouchableOpacity onPress={() => {

                console.log(state.history)
                if (index == 0) {
                    navigation.navigate('HomePage');
                } else {
                    navigation.navigate('MePage');
                }
            }
            } key={`${value.name}`}>
                <View key={index}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <Image source={icon} style={state.index == index ? { width: UID(24), height: UID(24) } : { width: UID(18), height: UID(18) }}></Image>
                    </View>
                </View>
            </TouchableOpacity>
        })}
    </View >;
}


export function HomePage({ }: NativeStackScreenProps<StatckOptions, 'Home'>): JSX.Element {
    return <Tab.Navigator tabBar={(props) => <BottomBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomePage" component={ListFragment} />
        <Tab.Screen name="MePage" component={MeFragment} />
    </Tab.Navigator>
}