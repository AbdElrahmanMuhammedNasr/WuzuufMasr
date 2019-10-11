import { Component, OnInit } from '@angular/core';
import {FriendsClass, OperService} from '../share/httpService/oper.service';
import {PostPatternService} from '../share/Datapattern/post-pattern.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  myProfile = localStorage.getItem('owner'); // name of the owner
  friendsName: FriendsClass;

  peopleWhoSendCv = 0 ;
  showComfirmPass = false;
  passInput: string;


  constructor(private httpSer: OperService, private route: ActivatedRoute, private router: Router) { }
  posts: PostPatternService;

  ngOnInit() {
    this.getPosts();
    this.httpSer.getFriends(this.myProfile).subscribe(
      resFriend => {
          this.friendsName = resFriend;
      }
    );

  }

  deletePost(id: number) {
        this.httpSer.deletePost(id).subscribe(
          res => {
            this.getPosts();
          }
        );
  }
  getPosts() {
    this.httpSer.getPosts().subscribe(
      resPost => {
        this.posts = resPost;
        console.log(this.posts);
      } , error => {
        console.log('the error is ' + error.message);
      }
    );
  }

  countSender(postId: number) {
    console.log('post id is ' + postId);
    this.showComfirmPass = true;
  }
  confirmPass(SendOrCan: string) {
    console.log(this.passInput);
    if (SendOrCan === 'Confirm') {
      this.peopleWhoSendCv ++;
      // this.myProfile;
    }
    this.showComfirmPass = false;
    this.passInput = null;
  }

}
