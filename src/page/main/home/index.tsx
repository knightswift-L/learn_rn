
import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, View } from 'react-native';
import { StatckOptions, } from '../../../routes/types';
import { ListFragment } from './list';
import { MeFragment } from './me';
import { UID } from '../../../utils/screen_util';
import { to_do, to_do_selected, mine, mine_selected } from '../../../assets';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpdateNickNamePage from '../../user/update-nickname';
export type HomePageProps = {
}
const Tab = createBottomTabNavigator();

function BottomBar({ state, navigation }: BottomTabBarProps) {
    return <View style={{ height: UID(54), width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
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
                    navigation.navigate('HomePage', {
                        screen: "ListPage"
                    });
                } else {
                    navigation.navigate('SettingPage', {
                        screen: 'MePage'
                    });
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


const HomeStack = createNativeStackNavigator<HomeStackOptions>();
const MeStack = createNativeStackNavigator<MeStackOptions>();

export type HomeStackOptions = {
    ListPage: undefined
}

export type MeStackOptions = {
    MePage: undefined,
    UpdateNickName: undefined
}

function HomeStackScreen() {
    return <HomeStack.Navigator initialRouteName='ListPage' screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name='ListPage' component={ListFragment} />
    </HomeStack.Navigator>
}

function MeStackScreen() {
    return <MeStack.Navigator initialRouteName='MePage' screenOptions={{ headerShown: false }}>
        <MeStack.Screen name='MePage' component={MeFragment} />
        <MeStack.Screen name="UpdateNickName" component={UpdateNickNamePage} />
    </MeStack.Navigator>
}


export function HomePage({ }: NativeStackScreenProps<StatckOptions, 'Home'>): JSX.Element {
    return <Tab.Navigator tabBar={(props) => <BottomBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomePage" component={HomeStackScreen} />
        <Tab.Screen name="SettingPage" component={MeStackScreen} />
    </Tab.Navigator>
}