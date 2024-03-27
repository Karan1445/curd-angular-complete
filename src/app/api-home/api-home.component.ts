import { Component } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-home',
  templateUrl: './api-home.component.html',
  styleUrl: './api-home.component.css'
})
export class ApiHomeComponent {
  Display_array:[]=[];
    constructor(private _api:ApiCallsService,private _router:Router){

    }
    ngOnInit(){
      this._api.GetAll().subscribe((res:any)=>{
        this.Display_array=res;
      //  console.log(res);
      });
    }
    Delete(id:any){
      this._api.Deletes(id).subscribe(()=>{
        this.ngOnInit();
      })
    }
    post(id:any){
      this._router.navigate(["add/"+id]);
    }
    realpost(){
      this._router.navigate(["add"]);
    }
}
