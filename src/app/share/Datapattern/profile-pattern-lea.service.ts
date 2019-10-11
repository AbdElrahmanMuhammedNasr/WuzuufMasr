import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePatternLeaService {

  constructor( public  id: number, public courseName: string) { }


}
