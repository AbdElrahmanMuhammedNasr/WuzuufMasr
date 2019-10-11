import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {OperService} from "../share/httpService/oper.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  interested = ['programing', 'photoShop', 'web', 'language', 'management', 'IT'];
  isPostSuccess = false;
  @ViewChild('f', {static: true}) dataForm: NgForm;

  constructor(private route: ActivatedRoute, private httpSer: OperService) { }
    owner: string;
  ngOnInit() {
    this.owner = localStorage.getItem('owner');
  }

  PostingData() {

    this.httpSer.addPost(this.owner, this.dataForm.value).subscribe(
      resSave => {
        console.log(resSave);
      }
    );

    setTimeout( () => {
      this.isPostSuccess = false;
    } , 1000)
    this.isPostSuccess = true;
    this.dataForm.reset();
  }

}
