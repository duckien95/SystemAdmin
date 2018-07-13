import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EqualValidator } from './directives/equal-validator.directive';
import { AutoCompleteModule } from 'primeng/primeng';

import { CheckPermissionService } from './services/check-permission.service';
import { LoginRedirectService } from './services/login-redirect.service';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ValidatePasswordDirective } from './directives/validate-password.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MultipleFileUploadComponent } from './components/multiple-file-upload/multiple-file-upload.component';
import { BaseComponent } from './components/base/base.component';
import { VariationThemAddOrChangeComponent } from './components/variation-theme/variation-theme-add-or-change/variation-theme-add-or-change.component';

import { FileUploadModule } from 'primeng/fileupload';
import { CKEditorModule } from 'ng2-ckeditor';
import { VendorComponent } from './components/vendor/vendor/vendor.component';
import { VendorAddOrChangeComponent } from './components/vendor/vendor-add-or-change/vendor-add-or-change.component';
import { VendorDetailComponent } from './components/vendor/vendor-detail/vendor-detail.component';

import { BannerComponent } from './components/marketing-management/banner/banner/banner.component';
import { BannerItemComponent } from './components/marketing-management/banner/banner-item/banner-item.component';
import { BannerAddOrChangeComponent } from './components/marketing-management/banner/banner-add-or-change/banner-add-or-change.component';
import { BannerItemAddOrChangeComponent } from './components/marketing-management/banner/banner-item-add-or-change/banner-item-add-or-change.component';
import { WarehouseComponent } from './components/warehouse-manager/warehouse/warehouse.component';
import { WarehouseAddOrChangeComponent } from './components/warehouse-manager/warehouse-add-or-change/warehouse-add-or-change.component';
import { WarehouseAddressComponent } from './components/warehouse-manager/warehouse-address/warehouse-address.component';
import { VariationthemeManagerComponent } from './components/variation-theme/variation-theme-manager/variation-theme-manager.component';
import { WarehouseDetailComponent } from './components/warehouse-manager/warehouse-detail/warehouse-detail.component';
import { TemplateDefineComponent } from './components/marketing-management/template-define.component';
import { TemplateDefineHtmlComponent } from './components/marketing-management/template-define-html.component';
import { WarehouseInventoryAddOrChangeComponent } from './components/warehouse-manager/warehouse-inventory/warehouse-inventory-add-or-change.component';
import { WarehouseInventoryAddOrChangeImeiComponent } from './components/warehouse-manager/warehouse-inventory/warehouse-inventory-add-or-change-imei.component';
import { WarehouseInventoryComponent } from './components/warehouse-manager/warehouse-inventory/warehouse-inventory.component';
import { WarehouseInventoryAddQuantityComponent } from './components/warehouse-manager/warehouse-inventory/warehouse-inventory-add-quantity.component';

import { VendorCategoryRegisterComponent } from './components/vendor-register-product-manager/vendor-category-register/vendor-category-register.component';
import { VendorProductRegisterComponent } from './components/vendor-register-product-manager/vendor-product-register/vendor-product-register.component';
import { WarehouseVendorInventoryMangerComponent } from './components/warehouse-manager/warehouse-vendor-inventory/warehouse-vendor-inventory-manager.component';
import { WarehouseVendorInventoryComponent } from './components/warehouse-manager/warehouse-vendor-inventory/warehouse-vendor-inventory.component';
import { WarehouseVendorInventoryAddProductComponent } from './components/warehouse-manager/warehouse-vendor-inventory/warehouse-vendor-inventory-add-product.component';
import { CustomFormsModule } from 'ng2-validation';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { VendorRegisterProductManagerComponent } from './components/vendor-register-product-manager/vendor-register-product-manager.component';
import { VariationThemAttributeComponent } from './components/variation-theme/variation-them-attribute/variation-them-attribute.component';
import { FileUploaderPopupComponent } from './components/common/file-uploader-popup/file-uploader-popup.component';

import { VtpServiceComponent } from './components/marketing-management/vtp-service/vtp-service.component';
import { VtpServiceAddOrChangeComponent } from './components/marketing-management/vtp-service-add-or-change/vtp-service-add-or-change.component';
import { PostComponent } from './components/marketing-management/post/post.component';
import { PostAddOrChangeComponent } from './components/marketing-management/post-add-or-change/post-add-or-change.component'
import { RadioComponent } from './components/marketing-management/radio/radio.component';
import { RadioAddOrChangeComponent } from './components/marketing-management/radio-add-or-change/radio-add-or-change.component';
import { RadioScheduleComponent } from './components/marketing-management/radio-schedule/radio-schedule.component';
import { RadioScheduleAddOrChangeComponent } from './components/marketing-management/radio-schedule-add-or-change/radio-schedule-add-or-change.component';
import { OfferPriceComponent } from './components/marketing-management/offer-price/offer-price.component';
import { OfferPriceUpdateComponent } from './components/marketing-management/offer-price-update/offer-price-update.component';
import { RegisterAgencyComponent } from './components/marketing-management/register-agency/register-agency.component';
import { RegisterAgencyUpdateComponent } from './components/marketing-management/register-agency-update/register-agency-update.component';
import { ConsultComponent } from './components/marketing-management/consult/consult.component';
import { ConsultUpdateComponent } from './components/marketing-management/consult-update/consult-update.component';

const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRedirectService]
  },
  {
    path: 'login/:returnUrl',
    component: LoginComponent,
    canActivate: [LoginRedirectService]
  },
  {
    path: 'g',
    component: LayoutComponent,
    canActivate: [CheckPermissionService],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [CheckPermissionService]
      },

      {
        path: 'vendor',
        component: VendorComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'DetailVendor/:id',
        component: VendorDetailComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'banner',
        component: BannerComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'banner-item/:bannerId',
        component: BannerItemComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse/:id',
        component: WarehouseComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'template-define',
        component: TemplateDefineComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-detail/:id',
        component: WarehouseDetailComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'variationtheme',
        component: VariationthemeManagerComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-inventory/add',
        component: WarehouseInventoryAddOrChangeComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-inventory/change/:id',
        component: WarehouseInventoryAddOrChangeComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-inventory',
        component: WarehouseInventoryComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-vendor-inventory-manger',
        component: WarehouseVendorInventoryMangerComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'warehouse-vendor-inventory/:id',
        component: WarehouseVendorInventoryComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'category-register',
        component: VendorRegisterProductManagerComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'admin-menu',
        component: AdminMenuComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'services',
        component: VtpServiceComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'posts',
        component: PostComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'radios',
        component: RadioComponent,
        // canActivate: [CheckPermissionService]
      },
      {
        path: 'radio-schedule/:radioId',
        component: RadioScheduleComponent,
        // canActivate: [CheckPermissionService]
     },
     {
      path: 'offer-price',
      component: OfferPriceComponent,
      // canActivate: [CheckPermissionService]
     },
     {
      path: 'consult-service',
      component: ConsultComponent,
     // canActivate: [CheckPermissionService]
     },
     {
     path: 'register-agency',
     component: RegisterAgencyComponent,
     // canActivate: [CheckPermissionService]
     }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    EqualValidator,
    LayoutComponent,
    ValidatePasswordDirective,
    FileUploadComponent,
    MultipleFileUploadComponent,
    BaseComponent,
    BannerComponent,
    BannerItemComponent,
    BannerAddOrChangeComponent,
    BannerItemAddOrChangeComponent,
    VendorComponent,
    VendorAddOrChangeComponent,
    VendorDetailComponent,
    WarehouseComponent,
    WarehouseAddOrChangeComponent,
    WarehouseAddressComponent,
    TemplateDefineComponent,
    TemplateDefineHtmlComponent,
    WarehouseDetailComponent,
    VariationThemAddOrChangeComponent,
    VariationthemeManagerComponent,
    WarehouseInventoryAddOrChangeComponent,
    WarehouseInventoryAddOrChangeImeiComponent,
    WarehouseInventoryComponent,
    WarehouseInventoryAddQuantityComponent,
    WarehouseVendorInventoryMangerComponent,
    WarehouseVendorInventoryComponent,
    VendorCategoryRegisterComponent,
    VendorProductRegisterComponent,
    WarehouseVendorInventoryAddProductComponent,
    AdminMenuComponent,
    VendorRegisterProductManagerComponent,
    VariationThemAttributeComponent,
    FileUploaderPopupComponent,
    VtpServiceComponent,
    VtpServiceAddOrChangeComponent,
    PostComponent,
    PostAddOrChangeComponent,
    RadioComponent,
    RadioAddOrChangeComponent,
    RadioScheduleComponent,
    RadioScheduleAddOrChangeComponent,
    OfferPriceComponent,
    OfferPriceUpdateComponent,
    RegisterAgencyComponent,
    RegisterAgencyUpdateComponent,
    ConsultComponent,
    ConsultUpdateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig),
    NgxPaginationModule,
    CKEditorModule,
    NgbModule.forRoot(),
    FileUploadModule,
    AutoCompleteModule,
    CustomFormsModule
  ],
  exports: [
    RouterModule,
    EqualValidator
  ]
})

export class AppRoutingModule {

}
