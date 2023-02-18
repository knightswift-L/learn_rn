import { useState, useEffect, useCallback } from 'react';
import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import { getUserInfo, updateUserInfo } from '../../../../api/user';
import { UserInfoRes } from '../../../../types/user-info-res';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadFile } from '../../../../api/upload';
import Style from './index.style';
import { CustomButton, Scalfold } from '../../../../components';
import { Result } from '../../../../types/common';
import { UID } from '../../../../utils/screen_util';
import { StatckOptions } from '../../../../routes/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
export function MeFragment({ navigation }: BottomTabScreenProps<StatckOptions>): JSX.Element {
    const [userInfo, setUserInfo] = useState<UserInfoRes | undefined>()
    const [image, setImage] = useState<string>("http://localhost:8080/uploads/image_1676345847717.jpg");

    const getCurrentUserInfo = useCallback(() => {
        getUserInfo<Result<UserInfoRes>>().then((res) => {
            if (res.code == 200) {
                setUserInfo(res.data)
                setImage(res.data?.avatar ?? "")
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
                    uri: path.replace("file://", ""), // CameralRoll Url
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

    return <Scalfold>
        <View style={Style.headerContainer}>
            <TouchableOpacity onPress={onTapImage}>
                {image.length != 0 && <Image style={Style.avatar} source={{ uri: `http://localhost:8080/${image}` }} />}
                {image.length == 0 && <View style={Style.avatar} />}
            </TouchableOpacity>
            <View style={Style.headerRightContainer}>
                <TouchableOpacity onPress={
                    () => {
                        navigation.navigate("UpdateNickName");
                    }
                }><Text>{userInfo?.nickName ?? userInfo?.phone}</Text>
                </TouchableOpacity>
                <Text>{userInfo?.phone}</Text>
            </View>
        </View>
        <View style={{ height: "45%" }}></View>
        <View style={{ paddingHorizontal: UID(30), width: "100%" }}>
            <CustomButton onPress={() => { }} title="退出" />
        </View>
    </Scalfold>
}