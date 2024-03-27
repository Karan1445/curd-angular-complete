import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
    {path:"",component:ApiHomeComponent},
    {path:"add",component:PostDataComponent},
    {path:"add/:id",component:PostDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
