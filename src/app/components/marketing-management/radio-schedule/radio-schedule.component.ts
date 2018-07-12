import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { ConfigSetting } from '../../../common/configSetting';
import { RadioService } from '../../../services/marketing-management/radio.service';
import { RadioSearch } from '../../../models/marketing-management/search-model';
import { RadioModel } from '../../../models/marketing-management/radios/radio-model';
import { RadioScheduleAddOrChangeComponent } from '../radio-schedule-add-or-change/radio-schedule-add-or-change.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-radio-schedule',
  templateUrl: './radio-schedule.component.html',
  styleUrls: ['./radio-schedule.component.css']
})
export class RadioScheduleComponent implements OnInit {

   @ViewChild(RadioScheduleAddOrChangeComponent) radioScheduleAddOrChange: RadioScheduleAddOrChangeComponent;
   radioModel: RadioModel;
   currentRadioId: string;
   searchParams: RadioSearch;
   ListRadioSchedule: any = [];
   statuses: any;
   pageSize: number = 24;
   pageIndex: number = 0;
   constructor(
      private radioService: RadioService,
      private router: ActivatedRoute
   ) { }

   ngOnInit() {
      this.searchParams = new RadioSearch();
      this.radioModel = new RadioModel();
      this.router.paramMap.subscribe((param: ParamMap) => {
        // console.log(param);
        this.currentRadioId = param.get('radioId');
      });
      this.loadListRadioSchedule();
      this.statuses = [
         { 'value': 0, 'text': 'Status'},
         { 'value': 1, 'text': '1' },
         { 'value': 2, 'text': '2' },
         { 'value': 3, 'text': '3' }
      ];
   }

   loadListRadioSchedule() {
      // this.radioService.getRadioScheduleByParent({ "radioId": this.currentRadioId }).subscribe( res => {
      //    console.log(res);
      //    if(!res.error) {
      //       this.ListRadioSchedule = res.data;
      //    }
      // });

      this.radioService.getRadioById({ 'radioId': this.currentRadioId }).subscribe( res => {
         console.log(res);
         if(!res.error) {
            this.radioModel = res.radio;
            this.ListRadioSchedule = res.schedule;
         }
      })
   }

   onShowAddRadioSchedule(){
      this.radioScheduleAddOrChange.radioScheduleId = undefined;
      this.radioScheduleAddOrChange.radioModel = this.radioModel;
      this.radioScheduleAddOrChange.onInitRadioSchedule();
      $('#radio-schedule-add-or-change').modal('show');
   }

   onDeleteRadioSchedule(radioScheduleId){
      this.radioService.deleteRadioSchedule({ "radioScheduleId" : radioScheduleId }).subscribe (res => {
         if(!res.error) {
            // delete radio success
            ConfigSetting.ShowSuccess('Remove schedule success');
            this.loadListRadioSchedule();
         } else {
            ConfigSetting.ShowError(res.message);
         }
      })
   }

   onShowUpdateRadio(id) {
      this.radioScheduleAddOrChange.radioScheduleId = id;
      this.radioScheduleAddOrChange.radioModel = this.radioModel;
      this.radioScheduleAddOrChange.onInitRadioSchedule();
      $('#radio-schedule-add-or-change').modal('show');
   }

   public onRegisterConfirmation() {
      const obj = $('.radio_schedule_remove_bs_confirmation');
      const register = obj.attr('confirmation_register');
      if (register === '1') {
         return;
      }
      obj.attr('confirmation_register', '1');
      obj.confirmation({
         rootSelector: '[data-toggle=confirmation]'
      });
      const $that = this;
      obj.on('confirmed.bs.confirmation', function () {
         // console.log(this);
         const id = $(this).attr('tmpid');
         $that.onDeleteRadioSchedule(id);
      });
   }

}