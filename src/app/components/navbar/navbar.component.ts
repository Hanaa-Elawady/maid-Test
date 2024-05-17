import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/user-data';
import { GetdataService } from 'src/app/shared/services/getdata.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _GetdataService:GetdataService){}

  usersData: UserData[] =[] as UserData[]
  IDSearch!:number |undefined;
  SearchResults:boolean=false
  @ViewChild('searchField') FField!: ElementRef;
  @ViewChild('SearchResultField') SField!: ElementRef;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(pageNum?:number):void{
    this._GetdataService.getUsers(pageNum).subscribe({
      next:(response)=>{
        
        for(let i = 0 ; i < response.data.length ; i++){
          this.usersData.push(response.data[i]) ;   
        }

        if(response.page < response.total_pages){
          this.getUsers(++response.page)
        } 
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isClickInside1 = this.FField.nativeElement.contains(target);
    const isClickInside2 = this.SField.nativeElement.contains(target);

    if (!isClickInside1 && !isClickInside2) {
      this.SearchResults=false;
    }
  }

}
