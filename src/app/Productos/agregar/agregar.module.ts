import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarRoutingModule } from './agregar-routing.module';
import { AgregarComponent } from './agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AgregarModule { }
