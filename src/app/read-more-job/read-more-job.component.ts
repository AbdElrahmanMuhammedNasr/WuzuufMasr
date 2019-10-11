import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostPatternService} from "../share/Datapattern/post-pattern.service";
import {OperService} from "../share/httpService/oper.service";

@Component({
  selector: 'app-read-more-job',
  templateUrl: './read-more-job.component.html',
  styleUrls: ['./read-more-job.component.css']
})
export class ReadMoreJobComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpSer: OperService) { }
  post: PostPatternService;


  ngOnInit() {
    this.httpSer.getPostById(this.route.snapshot.queryParams['postId']).subscribe(
      resPost => {
        this.post = resPost;
        console.log(this.post);
      } , error => {
        console.log('the error is ' + error.message);
      }
    );
  }

}
