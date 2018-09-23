import { Injectable } from '@angular/core';
import { ConfigSetting } from '../common/configSetting';
import { HttpClientService } from '../common/http-client.service';
const BACKEND_API_URL = 'http://125.212.238.119:3344/api/';
// const BACKEND_API_URL = 'http://localhost:3344/api/';

@Injectable()
export class FacebookService {

    constructor(private httpClient: HttpClientService) {

    }

    searchFacebookUser(obj){
       return this.httpClient.postJsonObservableByURL(BACKEND_API_URL + ConfigSetting.UrlPathSearchFacebookUser, obj);
    }

    uploadTextFile(obj){
        return this.httpClient.postJsonObservableByURL(BACKEND_API_URL + ConfigSetting.UrlPathUploadTextFile, obj);
    }

}
