import { Component, OnInit } from '@angular/core';
import { ConfigSetting } from '../../common/configSetting';
import { FacebookService } from '../../services/facebook.service';

declare var App: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

    constructor(
        private facebookService: FacebookService
    ) { }

    filename: string = '';
    uid: string = '';
    list_user: any = [];
    data: any = [];
    xlsxDownloadUrl: string = '';
    txtDownloadUrl: string = '';
    pageIndex: number = 1;
    pageSize: number = 15;
    configSetting = ConfigSetting;

    ngOnInit() {
    }

    uploadTextFile(event) {
        var files = event.target.files;
        console.log(files);
        if(files.length){
           let form_data: FormData  = new FormData();
           form_data.append('file', files[0]);
           this.facebookService.uploadTextFile(form_data).subscribe( res => {
                console.log(res);
                if(res.error){
                    ConfigSetting.ShowError(res.message)
                }
                else {
                    ConfigSetting.ShowSuccess("Tải file thành công");
                    this.filename = res.filename;
                }
           });
        }
    }

    searchFacebookUser() {
        this.list_user = [];
        let list_uid = this.uid.split(',');
        App.blockUI();
        this.facebookService.searchFacebookUser({ 'list_uid': list_uid, 'filename': this.filename }).subscribe( res => {
            if(res.error){
                ConfigSetting.ShowError(res.message);
            } else {
                // console.log(res);
                this.data = res.data;
                this.list_user = res.data.users;
                this.xlsxDownloadUrl = 'http://125.212.238.119:3344' + res.data.xlsxFilename;
                this.txtDownloadUrl = 'http://125.212.238.119:3344' + res.data.txtFilename;
            }
            App.unblockUI();
        });
    }

}
