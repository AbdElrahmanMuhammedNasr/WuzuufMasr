import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UserDataSignUpService } from '../share/Datapattern/user-data-sign-up.service';
import {AllUserData, OperService} from "../share/httpService/oper.service";

@Component({
  selector: 'app-login-and-sign-up',
  templateUrl: './login-and-sign-up.component.html',
  styleUrls: ['./login-and-sign-up.component.css']
})
export class LoginAndSignUpComponent implements OnInit {

  notChoose = true;

  isLogin = true;

  gender = ['male', 'female'];
  interested = ['programing', 'photoShop', 'web', 'language', 'management', 'IT', 'HR', 'Hacking'];

  @ViewChild('f', {static: true}) dataForm: NgForm;

  Owner: string;
  newUserData: AllUserData;

  constructor(private httpSer: OperService, private  route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // if( this.route.snapshot.params['status'] === 'changeProfile'  ){
    //   this.isLogin = false;
    // }
  }

  SwitchSts() {
    this.isLogin = !this.isLogin;
    this.dataForm.reset();
  }

  getSubmitedData() {
    if (this.dataForm.valid) {
      localStorage.setItem('owner', this.dataForm.value.username);
      localStorage.setItem('pass', this.dataForm.value.password)
      if (this.isLogin) {
          this.router.navigate(['/home']);
      } else {
            this.newUserData = this.dataForm.value;
            this.httpSer.addNewUser(this.newUserData).subscribe(resD => { console.log(this.newUserData); } );
            this.router.navigate(['/profile'], {queryParams: {username: this.newUserData.username } });
            this.dataForm.reset();
      }
    } else { // not valid

    }


  }

  chooseInter(num: number) {
    console.log(num);
    this.notChoose = !this.notChoose;
  }

}
