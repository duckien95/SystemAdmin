import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VtpService } from '../../../services/marketing-management/vtp.service';
import { VtpServiceModel } from '../../../models/marketing-management/services/vtp-service-model';
import { ConfigSetting } from '../../../common/configSetting';

declare var $: any;

@Component({
  selector: 'app-vtp-service-add-or-change',
  templateUrl: './vtp-service-add-or-change.component.html',
  styleUrls: ['./vtp-service-add-or-change.component.css']
})
export class VtpServiceAddOrChangeComponent implements OnInit {
   @Output() reloadServiceEvent = new EventEmitter();
   vtpServiceModel: VtpServiceModel;
   ListParentService: any = [];
   ListServiceStatus: any = [];
   formValid: boolean;
   msg: string;
   constructor(
      private vtpService: VtpService
   ) { }

   ngOnInit() {
      this.vtpServiceModel = new VtpServiceModel();
      // console.log('vtpServiceModel start');
      // console.log(this.vtpServiceModel.serviceId);
      this.initVtpServiceModel();

   }

   initVtpServiceModel(){
      // console.log('init add or change', this.vtpServiceModel.serviceId )
      this.ListServiceStatus = [
         { id: 1, name: '1' },
         { id: 2, name: '2' },
         { id: 3, name: '3' }
      ];
      this.vtpService.getListParentService().subscribe( res => {
         // console.log(res);
         this.ListParentService = res.error ? [] :  res.data;
      })
      if(this.vtpServiceModel.serviceId != undefined){
         this.vtpService.getListService({ "serviceId": this.vtpServiceModel.serviceId }).subscribe( res => {
            console.log('service_detail',res.data[0]);
            console.log(res.data.length > 0);
            if(!res.error && res.data.length > 0){
               this.vtpServiceModel = res.data[0];
               this.vtpServiceModel.serviceId = res.data[0]._id;
            }
         })
      }
      else {
         this.vtpServiceModel = new VtpServiceModel();
         this.vtpServiceModel.parentId = "0";
         // this.vtpServiceModel.status = 0;
      }
      this.formValid = true;
   }

   onAddOrChange(form){
      this.formValid = form.valid;
      if(this.formValid){
         console.log(this.vtpServiceModel.serviceId);
         if(this.vtpServiceModel.serviceId == undefined){
            this.vtpService.createService(this.vtpServiceModel).subscribe( res => {
               if(res.error){
                  ConfigSetting.ShowError(res.message)
               }
               else {
                  ConfigSetting.ShowSuccess("Create service success");
                  this.reloadServiceEvent.emit();
                  $('#vtp-service-add-or-change').modal('hide');
                  this.initVtpServiceModel();
               }
            })
         }
         else {
            this.vtpService.updateService(this.vtpServiceModel).subscribe( res => {
               if(res.error){
                  ConfigSetting.ShowError(res.message)
               }
               else {
                  ConfigSetting.ShowSuccess("Update service success");
                  this.reloadServiceEvent.emit();
                  $('#vtp-service-add-or-change').modal('hide');
                  this.initVtpServiceModel();
               }
            })
         }

      }
      else {
         ConfigSetting.ShowError("Can not create service");
      }

   }

}