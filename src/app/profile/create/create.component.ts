import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfilePatternExperService } from 'src/app/share/Datapattern/profile-pattern-exper.service';
import { ProfilePatternProService } from 'src/app/share/Datapattern/profile-pattern-pro.service';
import { ProfilePatternLeaService } from 'src/app/share/Datapattern/profile-pattern-lea.service';
import {OperService} from '../../share/httpService/oper.service';
import {UsrDataComponent} from "../usr-data/usr-data.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  switchAdd = 'Learn';
  status = '';

  actionDone = false;

  owner  = localStorage.getItem('owner');

  myExper: any;

  @ViewChild('f', {static: true}) dataForm: NgForm;

  UpdateItem: any ;


  constructor(private router: Router,private route: ActivatedRoute, private httpService: OperService) { }
  ngOnInit() {
    if ( this.route.snapshot.params.what === 'Experience') {
        this.switchAdd = 'Experience';
    } else if ( this.route.snapshot.params.what === 'project') {
      this.switchAdd = 'Project';
    } else if ( this.route.snapshot.params.what === 'learn') {
      this.switchAdd = 'Course';
    }

    this.status = this.route.snapshot.queryParams.status;
  }

  prepareData(what: string, idF: number ) {
    console.log('this is what ' + what + ' and ' + idF);
    this.myExper = new ProfilePatternExperService(null, null, null, null);

    if (idF) {
      this.httpService.updateitem(what, idF).subscribe(
        resData => {
          this.UpdateItem = resData;
          console.log('update element' + this.UpdateItem.fields);
          console.log('update element' + this.UpdateItem.years);
          console.log('update element' + this.UpdateItem.companyName);
        }, error => {
          console.log('Error');
        }
      );
    }

  }

  /***************************************************************** */
  getSubmitedData() {
    if (this.route.snapshot.params.what === 'Experience') {
      this.httpService.saveDataProfile(this.owner, 'saveExperience', this.dataForm.value).subscribe();
    } else if (this.route.snapshot.params.what === 'project') {
      this.httpService.saveDataProfile(this.owner, 'saveProject', this.dataForm.value).subscribe();
    } else if (this.route.snapshot.params.what === 'learn') {
      this.httpService.saveDataProfile(this.owner, 'saveCourse', this.dataForm.value).subscribe();
    }
    this.dataForm.reset();


    setTimeout( () => {
      this.actionDone = false;
    }, 1000) ;
    this.actionDone = true;
  }

}
