import { Component, OnInit } from '@angular/core';
import { ConfigSetting } from '../../common/configSetting';
import { RoleService } from '../../services/role.service';
import { Dictionary } from '../../models/dictionary';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent implements OnInit {
   actionIds: string[] = ["Home/About", "Home/Index"];
   appId: string;
   list_account: any = ['daotaotruyenthong', 'facebook'];
   constructor(
      private roleService: RoleService
   ) {
      super();
   }

   ngOnInit() {
      super.onInit(this.actionIds);
      this.appId = '';
      if(localStorage.getItem('cms_app_id')){
         this.appId = localStorage.getItem("cms_app_id");
      }

   }

   logout() {
      console.log('logout');
      ConfigSetting.logoutSystem();
   }


}
