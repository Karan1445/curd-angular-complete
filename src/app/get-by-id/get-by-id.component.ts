import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {
  ids:Number=-1;
   names:any;
   
    constructor(private _activatesRoute:ActivatedRoute , private _homepage:HomeComponent,private _r:Router){
    this.ids=  this._activatesRoute.snapshot.params["id"];
    console.log(this._r.componentInputBindingEnabled);
    }
   

}
