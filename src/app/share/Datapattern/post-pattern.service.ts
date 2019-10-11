import { Injectable } from '@angular/core';
import {AllUserData} from "../httpService/oper.service";

@Injectable({
  providedIn: 'root'
})
export class PostPatternService {

  constructor() { }

  postPatternData: {
    id: null,
    jobName: null,
    require: null,
    numberOfEmp: null,
    field: null,
    postedIn: null,
    cvSender: null,
    experienceYears: null,
    level: null,
    jopType: null,
    salary: null,
    language: null,

    user: AllUserData
  };
}
