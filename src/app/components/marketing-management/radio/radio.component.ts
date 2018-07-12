import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { ConfigSetting } from '../../../common/configSetting';
import { RadioService } from '../../../services/marketing-management/radio.service';
import { RadioSearch } from '../../../models/marketing-management/search-model';
import { RadioAddOrChangeComponent } from '../radio-add-or-change/radio-add-or-change.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
   @ViewChild(RadioAddOrChangeComponent) radioAddOrChange: RadioAddOrChangeComponent;
   searchParams: RadioSearch;
   ListRadio: any = [];
   statuses: any;
   pageSize: number = 4;
   pageIndex: number = 0;
   msg: string;
   constructor(
      private radioService: RadioService
   ) { }

   ngOnInit() {
      this.loadListRadio();
      this.searchParams = new RadioSearch();
      this.statuses = [
         { 'value': 0, 'text': 'Status'},
         { 'value': 1, 'text': '1' },
         { 'value': 2, 'text': '2' },
         { 'value': 3, 'text': '3' }
      ];
   }

   searchRadio(){
      this.msg = '';
      this.radioService.searchRadio(this.searchParams).subscribe( res => {
         if(res.error){
            this.msg = res.message;
            this.ListRadio = [];
         } else if(res.data.length){
            this.ListRadio =  res.data;
         } else {
            this.msg = "Radio not found";
            this.ListRadio = [];
         }

      })
   }

   loadListRadio() {
      this.radioService.getListRadio({}).subscribe( res => {
         console.log(res);
         if(!res.error) {
            this.ListRadio = res.data;
         }
      })
   }
   onShowAddRadio(){
      this.radioAddOrChange.radioModel._id = undefined;
      this.radioAddOrChange.initRadioModel();
      $('#radio-add-or-change').modal('show');
   }

   onDeleteRadio(radioId){
      this.radioService.deleteRadio({ "radioId" : radioId }).subscribe (res => {
         if(!res.error) {
            // delete radio success
            ConfigSetting.ShowSuccess('Remove radio and schedule success');
            this.loadListRadio();
         } else {
            ConfigSetting.ShowError(res.message);
         }
      })
   }

   onShowUpdateRadio(id) {
      this.radioAddOrChange.radioModel._id = id;
      this.radioAddOrChange.initRadioModel();
      $('#radio-add-or-change').modal('show');
   }

   public onRegisterConfirmation() {
      const obj = $('.radio_remove_bs_confirmation');
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
         $that.onDeleteRadio(id);
      });
   }

}
