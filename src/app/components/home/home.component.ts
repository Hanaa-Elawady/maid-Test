import { Component ,OnInit } from '@angular/core';
import { GetdataService } from 'src/app/shared/services/getdata.service';
import { NgxSpinnerService } from "ngx-spinner";
import { UserData } from 'src/app/shared/interfaces/user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _GetdataService:GetdataService , private _NgxSpinnerService:NgxSpinnerService){}

  usersData: UserData[] =[] as UserData[]
  currentPage:number =0;
  pageSize:number =0;
  total:number =0 ;
  spinner:boolean =true


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(pageNum?:number):void{
    this._NgxSpinnerService.show();
    this._GetdataService.getUsers(pageNum).subscribe({
      next:(response)=>{
        this.usersData = response.data ; 
        this.currentPage =response.page ;
        this.pageSize =response.per_page;
        this.total = response.total;  
        this.spinner=false  
        this._NgxSpinnerService.hide();  
      },
      error:(error)=>{
        console.log(error);
      } 
    })
  }

  pageChanged(event:number):void{
    this.getUsers(event)
  }


}
