//import { TokenInterceptorService } from './Services/TokenInterceptor/token-interceptor.service';
import { HttpClient, HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/PropertyCard/property-card/property-card.component';
import { PropertyListComponent } from './Property/PropertyList/property-list/property-list.component';
import { HeaderComponent } from './Header/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { SliderComponent } from './Slider/slider/slider.component';
import { PropertyDetailsComponent } from './Property/PropertyDetails/property-details/property-details.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Register/register/register.component';
import { FormsModule } from '@angular/forms';
import { AddingNewPropertyComponent } from './Property/AddingNewProperty/adding-new-property/adding-new-property.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {GoTopButtonModule} from 'ng-go-top-button';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboradComponent } from './Dashboard/dashborad/dashborad.component';
import { UploadImageComponent } from './Property/UploadImage/upload-image/upload-image.component';
import { CreatePropertyComponent } from './Property/CreateProperty/create-property/create-property.component';
import { PropertyByIdComponent } from './Property/PropertyById/property-by-id/property-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    PropertyDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AddingNewPropertyComponent,
    DashboradComponent,
    UploadImageComponent,
    CreatePropertyComponent,
    PropertyByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    NgxGalleryModule,
    GoTopButtonModule, 
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [/*{
    provide :HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi : true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
