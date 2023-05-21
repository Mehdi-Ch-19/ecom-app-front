import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './service/productservice.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
   ],
  providers:[
    ProductserviceService
  ],
   
})
export class CoreModule { }
