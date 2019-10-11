import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AllUserData, OperService} from "../../share/httpService/oper.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-usr-info',
  templateUrl: './usr-info.component.html',
  styleUrls: ['./usr-info.component.css']
})
export class UsrInfoComponent implements OnInit {
  username: string;
  owner: string;

  constructor(private router: Router, private route: ActivatedRoute, private httpService: OperService) { }
  userData: AllUserData;
  private updateSubscription: Subscription;

  ngOnInit() {
    this.owner = localStorage.getItem('owner');
    this.username = this.route.snapshot.queryParams['username'];
    this.route.queryParams.subscribe(
      (p: Params) => {
        this.username = p['username'];
      }
    );

    // this.updateSubscription = interval(1).subscribe(
    //   (val) => {
    this.getUserData();
    //   }
    // );
  }

  updateuserInfo() {
      this.router.navigate(['/login']/*,{queryParams: {status: 'changeProfile'} }*/);
  }
  sendMessage(User: string) {
    this.router.navigate(['/messager'], {queryParams: {username: User} });
  }

  getUserData() {
    this.httpService.getuserdata(this.username).subscribe(
      resData => {
        this.userData = resData;
      }
    );
  }

}
