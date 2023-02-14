
import React, { useState } from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { StatckOptions } from '../../../routes/types';
import { ListFragment } from './list';
import { MeFragment } from './me';
import { UID } from '../../../utils/screen_util';
import { to_do, to_do_selected, mine, mine_selected } from '../../../assets';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export type HomePageProps = {
}
const Tab = createBottomTabNavigator();

function BottomBar({ state, descriptors, navigation }: BottomTabBarProps) {
    return <View style={{ height: UID(54), width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        {state.routes.map((value, index) => {
            let icon = to_do_selected;
            if (state.index == index) {
                icon = index == 0 ? to_do_selected : mine_selected;
            } else {
                icon = index == 0 ? to_do : mine;
            }

            return <TouchableOpacity onPress={() => {
                navigation.navigate(state.index == 0 ? "MePage" : "ListPage")
            }} key={`${value.name}`}>
                <View key={index}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <Image source={icon} style={state.index == index ? { width: UID(24), height: UID(24) } : { width: UID(18), height: UID(18) }}></Image>
                        {/* <Text style={{ color: state.index == index ? "blue" : "gray", fontSize: state.index == index ? UID(15) : UID(10) }}>{index == 0 ? "TODO" : "Me"}</Text> */}
                    </View>
                </View>
            </TouchableOpacity>
        })}
    </View >;
}


export function HomePage({ navigation, route }: NativeStackScreenProps<StatckOptions, 'Home'>): JSX.Element {
    return <Tab.Navigator tabBar={(props) => <BottomBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ListPage" component={ListFragment} />
        <Tab.Screen name="MePage" component={MeFragment} />
    </Tab.Navigator>
}