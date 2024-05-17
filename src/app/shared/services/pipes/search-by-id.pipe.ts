import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../../interfaces/user-data';

@Pipe({
  name: 'searchByID'
})
export class SearchByIDPipe implements PipeTransform {

  transform(userdata:UserData[] , Id:number |undefined): UserData[] {
    if(Id === undefined){
      return userdata;
    }else{
      return userdata.filter((item)=>{
        return item.id !== undefined && item.id.toString().includes(Id.toString());
      })
    }
    }

}
