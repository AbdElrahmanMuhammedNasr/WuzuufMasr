import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AllUserData, OperService} from '../share/httpService/oper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   // console.log('this is my fragment '+this.route.fragment['#']);
  }

}
