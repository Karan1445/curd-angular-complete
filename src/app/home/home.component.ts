import { Component } from '@angular/core';
import { Lists } from '../../Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  after:Lists=new Lists();
  DemoList:any=[];
  DemoData:Lists={id:-1,name:"Karan",surname:"Gohel"}; 
    constructor(private _router:Router){
      
    }
   Save(from:any,id:number=this.DemoList.length+1){
    this.DemoList.push({...this.DemoData,"id":id});
   }
   Delete(Data:any){
      this.DemoList=(this.DemoList.filter((res:any )=> res.id!=Data.id))
     }

     GetById(id:any){
      this.after.id=id;
      this._router.navigate(["add/"+id],this.DemoList);

     }



    
}
