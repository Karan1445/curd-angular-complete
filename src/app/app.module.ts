import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
@NgModule({
  declarations: [
   PostDataComponent,
    AppComponent,
    HomeComponent,
    GetByIdComponent,
    ApiHomeComponent
  ],
  imports: [ HttpClientModule,FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
