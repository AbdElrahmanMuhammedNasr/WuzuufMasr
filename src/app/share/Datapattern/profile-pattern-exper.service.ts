import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePatternExperService {

  constructor(
              public  id: number ,
              public fields: string,
              public years: string,
              public companyName?: string ) { }
}
