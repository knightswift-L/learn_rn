import { useState, useEffect, useCallback } from 'react';
import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import { getUserInfo } from '../../../../api/user';
import AppBar from '../../../../components/app-bar';
import { UserInfoRes } from '../../../../types/user-info-res';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { UID } from '../../../../utils/screen_util';
import { post } from '../../../../request';
import { uploadFile } from '../../../../api/upload';
import Scalfold from '../../../../components/scalfold';
import Style from './index.style';
export function MeFragment(): JSX.Element {
    const [userInfo, setUserInfo] = useState<UserInfoRes | undefined>()
    const [image, setImage] = useState<string>("http://localhost:8080/uploads/image_1676345847717.jpg");
    useEffect(() => {
        getUserInfo<UserInfoRes>().then((res) => {
            if (res.code == 200) {
                setUserInfo(res.data)
            }
        }).catch((error: Error) => {
            console.log(error.message)
        });
    }, [userInfo])

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
                    setImage(`http://localhost:8080/${value.data?.images[0] ?? ""}`)
                }).catch((error) => {

                });
            }
        }).catch((error) => {

        })
    }, [])

    return <Scalfold>
        <View style={Style.headerContainer}>
            <TouchableOpacity onPress={onTapImage}>
                {image.length != 0 && <Image style={Style.avatar} source={{ uri: image }} />}
                {image.length == 0 && <View style={Style.avatar} />}
            </TouchableOpacity>
            <View style={Style.headerRightContainer}>
                <Text>{userInfo?.nickName ?? userInfo?.phone}</Text>
                <Text>{userInfo?.phone}</Text>
            </View>
        </View>
    </Scalfold>
}