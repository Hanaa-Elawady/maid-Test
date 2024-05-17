import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserData } from 'src/app/shared/interfaces/user-data';
import { GetdataService } from 'src/app/shared/services/getdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _GetdataService:GetdataService , private _NgxSpinnerService:NgxSpinnerService){}

  userID:any=''
  userData:any;
  spinner:boolean =true
  usersData: UserData = {} as UserData

  ngOnInit() {
    this._NgxSpinnerService.show();
    this._ActivatedRoute.paramMap.subscribe({
      next: (slug) => {
        this.userID= slug.get('id');
        this.getuserDate(this.userID)
      },
    });
  }

  getuserDate(userid:string ):void{
    this._GetdataService.getSpecificUser(userid).subscribe({
      next:(response)=>{
        this.userData =response.data
        this.spinner=false  
        this._NgxSpinnerService.hide();  
      }
    })
  }
}
