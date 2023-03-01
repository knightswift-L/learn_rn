import { useEffect, useCallback } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { getUserInfo, updateUserInfo } from '../../../../api/user';
import { UserInfoRes } from '../../../../types/user-info-res';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadFile } from '../../../../api/upload';
import Style from './index.style';
import { CustomButton, Scalfold } from '../../../../components';
import { Result } from '../../../../types/common';
import { UID } from '../../../../utils/screen_util';
import { StatckOptions } from '../../../../routes/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useCustomUser } from '../../../../provider/useUser';
import GlobalData from '../../../../config/global';
import { useNavigation } from '@react-navigation/native';
export function MeFragment({ navigation }: BottomTabScreenProps<StatckOptions>): JSX.Element {
    const { user, setUser } = useCustomUser();

    const getCurrentUserInfo = useCallback(() => {
        getUserInfo<Result<UserInfoRes>>().then((res) => {
            if (res.code == 200) {
                setUser(res.data ?? null);
            }
        }).catch((error: Error) => {
            console.log(error.message)
        });
    }, [])
    useEffect(() => {
        getCurrentUserInfo();
    }, [])

    const onTapImage = useCallback(() => {
        launchImageLibrary({ selectionLimit: 1, mediaType: 'photo' }).then(async (value) => {
            if (!value.errorCode) {
                console.log(value.assets?.map((item) => item.uri?.toString()).join(","));
                let path = value.assets![0].uri!;
                var photo = {
                    uri: path.replace("file://", ""),
                    type: 'image/jpeg',
                    name: 'photo.jpg',
                };

                var formData = new FormData();
                formData.append("file", photo);
                uploadFile(formData).then((value) => {
                    if (value.code == 200 && value.data?.images && value.data.images.length != 0) {
                        updateUserInfo<Record<string, any>>({ avatar: value.data?.images[0] }).then((response) => {
                            if (response.code == 200) {
                                getCurrentUserInfo();
                            }
                        })
                    }
                }).catch((error) => {

                });
            }
        }).catch((error) => {

        })
    }, [])
    const logout = useCallback(() => {
        GlobalData.token = null;
        setUser(null);
        // navigation.popUntil("Login");
    }, [])
    return <Scalfold>
        <View style={Style.headerContainer}>
            <TouchableOpacity onPress={onTapImage}>
                {user?.avatar && user.avatar.length != 0 && <Image style={Style.avatar} source={{ uri: `http://localhost:10556/${user?.avatar}` }} />}
                {!(user?.avatar) || user.avatar.length == 0 && <View style={Style.avatar} />}
            </TouchableOpacity>
            <View style={Style.headerRightContainer}>
                <TouchableOpacity onPress={
                    () => {
                        navigation.navigate("UpdateNickName");
                    }
                }><Text>{user?.nickName ?? user?.phone}</Text>
                </TouchableOpacity>
                <Text>{user?.phone}</Text>
            </View>
        </View>
        <View style={{ height: "45%" }}></View>
        <View style={{ paddingHorizontal: UID(30), width: "100%" }}>
            <CustomButton onPress={logout} title="退出" />
        </View>
    </Scalfold>
}