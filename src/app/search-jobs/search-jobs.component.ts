import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AllUserData, OperService} from "../share/httpService/oper.service";

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  @ViewChild('f', {static: true}) dataForm: NgForm;

  constructor(private httpSer: OperService) { }

  userSearch: AllUserData;

  ngOnInit() {
  }
  getDataFromSearch() {
    this.httpSer.getuserdata(this.dataForm.value.search).subscribe(
        resUser => {
            this.userSearch = resUser;
        }
    );
  }

}
