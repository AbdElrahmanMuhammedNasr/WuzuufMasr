import { Component, OnInit } from '@angular/core';
import {FriendsClass, OperService} from "../share/httpService/oper.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  constructor(private httpSer: OperService, private route: ActivatedRoute, private router: Router) { }
  friendsName: FriendsClass;

  usernameYouTalk: string;
  owner = localStorage.getItem('owner');

   ngOnInit() {
    this.httpSer.getFriends(localStorage.getItem('owner')).subscribe(
      resFriend => {
        this.friendsName = resFriend;
      }
    );
  }


}
