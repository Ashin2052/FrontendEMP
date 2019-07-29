import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(fullName:string,gender:string) {
    console.log(fullName, 'fulllname',gender,'gender')
   
    if(gender.toLowerCase()=='male')
    {
      return 'Mr.'+fullName
    }
    else
    {
      return 'Ms.'+fullName
    }
  }

}
