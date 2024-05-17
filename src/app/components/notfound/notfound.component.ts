import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NOTFOUNDComponent {
  constructor(private _Router:Router){}

  navigateBack():void{
    this._Router.navigate(['/home'])
  }
}
