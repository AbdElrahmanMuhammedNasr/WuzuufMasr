import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProfilePatternLeaService } from 'src/app/share/Datapattern/profile-pattern-lea.service';
import { ProfilePatternProService } from 'src/app/share/Datapattern/profile-pattern-pro.service';
import { ProfilePatternExperService } from 'src/app/share/Datapattern/profile-pattern-exper.service';
import {OperService} from '../../share/httpService/oper.service';
import {CreateComponent} from "../create/create.component";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-usr-data',
  templateUrl: './usr-data.component.html',
  styleUrls: ['./usr-data.component.css']
})
export class UsrDataComponent implements OnInit {

  username: string;
  owner: string

  constructor(private router: Router, private route: ActivatedRoute, private httpService: OperService ) { }

  learTest: ProfilePatternLeaService ;
  projectsTest: ProfilePatternProService ;
  ExperiencrTest: ProfilePatternExperService;

  private updateSubscrion: Subscription;
  ngOnInit() {
    this.username = this.route.snapshot.queryParams.username;
    this.route.queryParams.subscribe(
      (p: Params) => {
        this.username = p.username;
        // console.log('this status ' + this.status);
      }
    );
    this.owner = localStorage.getItem('owner');
   // this.updateSubscrion = interval(1).subscribe(
    //  (val) => {
    this.getAnyUserAllData();

    //  }
   // );

  }


  /* this function yo get all data from one user*/
  getAnyUserAllData() {
    /*************************** get Exper**************************************/
    this.httpService.getExperienceUser(this.username).subscribe(
      resDataE => {
        this.ExperiencrTest =  resDataE;
      }
    );
    /************************get course**********************************/
    this.httpService.getLearnUser(this.username).subscribe(
      resDataL => {
        this.learTest  = resDataL;
      }
    );
    /***************************get project****************************************/
    this.httpService.getProjectsUser(this.username).subscribe(
      resDataP => {
        this.projectsTest = resDataP;
      }
    );
  }


  addData(whichAdd: string) {
    this.router.navigate(['operation', whichAdd], { queryParams: { status: 'add'} } );
  }

  deleteItem(where: string, itemId: number) {
    this.httpService.deleteItem(where, itemId).subscribe();
    this.getAnyUserAllData();
  }


  updateItem(what: string, itemId: number) {
    // let x = new URLSearchParams();
    // x.append('status','update'); not apper
    new CreateComponent(this.router, this.route, this.httpService).prepareData(what, itemId);
    this.router.navigate(['/operation', what], { queryParams: {status: 'update', idItem: itemId} });
  }

}
