import { Result } from "../types/common";
import { UploadFileRes } from "../types/upload-file-res";

export function uploadFile(data: FormData): Promise<Result<UploadFileRes>> {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', `http://localhost:10556/upload/file`);
        console.log('OPENED', xhr.status);

        xhr.onprogress = function () {
            console.log('LOADING', xhr.status);
        };

        xhr.onload = function () {
            console.log('DONE', xhr.status);
        };

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var result = xhr.responseText;
                    console.log(result);
                    resolve(JSON.parse(result))
                } else {
                    reject(xhr.response)
                }
            }
        }
        xhr.send(data);
    });
}