import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvePipe'
})
export class approvePipe implements PipeTransform {

  transform(Approved:string) {
      console.log(Approved)
   
    if(Approved.toLowerCase()=='true')
    {
      return 'leave Appproved'
    }
    else if(Approved.toLowerCase()=='pending')
    {
        return 'Your leave has not been reviewed yet'
    }
    else
    {
      return 'Sorry,leave Disapproved'
    }
  }

}
