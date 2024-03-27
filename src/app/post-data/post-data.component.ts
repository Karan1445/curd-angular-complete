
import { Component } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent {
 
    Data:any;
    updates:any;
    constructor(private _route:Router,private _api:ApiCallsService,private _activatesroutes:ActivatedRoute){

    } 
    ngOnInit(){
      if(this._activatesroutes.snapshot.params["id"]){
        this._api.GetById(this._activatesroutes.snapshot.params["id"]).subscribe((res:any)=>{
          console.log(res);
          this.Data=res;
          this.updates={...this.Data};
        });
      }else{
        this.Data["id"]=-1;
      }
      
    
    }
    Delete(){
        this._api.Deletes(this.Data['id']).subscribe(()=>{
            this._route.navigate([""]);
        });
    }GoBack(){
      this._route.navigate([""]);
    }
    update(forms:any){
      console.log(forms);
      if(this._activatesroutes.snapshot.params["id"]){
        if(forms["avatar"]==null ){
          forms["avatar"]=this.Data["avatar"];
          if(forms["name"]==null){ 
            forms["name"]=this.Data["name"];
          }
        }
        this._api.UpdateById({"avatar":forms["avatar"],"name":forms["name"]},this.Data['id']).subscribe((res)=>{
          this.ngOnInit();
        });
      
      }else{
        if(forms["name"]!==null || forms["name"]!=undefined){ 
        this._api.posts({"name":forms["name"]}).subscribe((res)=>{
          console.log(res);
          this._route.navigate([""]);
        });
      }
     
      }
        
    }
}
