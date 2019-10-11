import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePatternProService {

  constructor(public  id: number ,
              public projectName: string,
              public toWho: string,
              public members: string,
              public role: string,
              public link: string,
              ) { }



}
