import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProfilePatternExperService} from '../Datapattern/profile-pattern-exper.service';
import {ProfilePatternProService} from '../Datapattern/profile-pattern-pro.service';
import {ProfilePatternLeaService} from '../Datapattern/profile-pattern-lea.service';
import {PostPatternService} from "../Datapattern/post-pattern.service";

export class AllUserData {
      constructor(  public  id: number ,
                    public myJob: string,
                    public  email: string,
                    public  username: string,
                    public  dataOfBirth: string,
                    public  phone: string,
                    public city: string,
                    public  gender: string,
                    public shortCut: string
                  ) {}
}

export class FriendsClass {
    constructor(public id: number, public friends: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class OperService {

  constructor(private  http: HttpClient) { }

  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa(localStorage.getItem('owner') + ':' + localStorage.getItem('pass'));
    return hearderAut;
  }
/*********************************************** add user*******************/
  addNewUser(user: AllUserData) {
    return this.http.post('http://localhost:8080/saveUser', user);
  }

/**********************************************end add user *******************/


/*************************************** profile data*****************************************************/
  getuserdata(username: string) {
  const header = new HttpHeaders({
    Authorization: this.basicAuth()
  });
  return this.http.get<AllUserData>(`http://localhost:8080/${username}/data`, {headers: header});
  }

  getLearnUser(username: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get<ProfilePatternLeaService>(`http://localhost:8080/${username}/course`, {headers: header});
  }
  getProjectsUser(username: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get<ProfilePatternProService>(`http://localhost:8080/${username}/project`, {headers: header});
  }

  getExperienceUser(username: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get<ProfilePatternExperService>(`http://localhost:8080/${username}/experience`, {headers: header});
  }
/******************************************end profile data******************************************************************/

  /****************************************** post data******************************************************************/
    getPosts() {
      const header = new HttpHeaders({
        Authorization: this.basicAuth()
      });
      return this.http.get<PostPatternService>('http://localhost:8080/getPosts', {headers: header});
    }

    getPostById(postId: number) {
      const header = new HttpHeaders({
        Authorization: this.basicAuth()
      });
      return this.http.get<PostPatternService>(`http://localhost:8080/getPost/${postId}`, {headers: header});
    }

    addPost(username: string, post: PostPatternService) {
      const header = new HttpHeaders({
        Authorization: this.basicAuth()
      });
      return this.http.post(`http://localhost:8080/${username}/savePost`, post , {headers: header});
    }

    deletePost(id: number) {
      const header = new HttpHeaders({
        Authorization: this.basicAuth()
      });
      return this.http.get(`http://localhost:8080/delete/post/${id}`, {headers: header});
    }

  /******************************************end post data******************************************************************/


  /****************************************** friends data******************************************************************/
  getFriends(username: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get<FriendsClass>(`http://localhost:8080/${username}/getFriends`, {headers: header});
  }

  /******************************************end friends data******************************************************************/

  /******************************************  search data******************************************************************/
  saveDataProfile(owner: string, where: string, data: any) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.post(`http://localhost:8080/${owner}/${where}/Save`, data, {headers: header});
  }

  /******************************************  end search data******************************************************************/

  /*****************************************delete iterm in profile *************/
  deleteItem(where: string, id: number) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get(`http://localhost:8080/deleteItem/${where}/${id}`, {headers: header});
  }
  updateitem(where: string, id: number) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get(`http://localhost:8080/update/${where}/${id}`, {headers: header});
  }
  /*********************************************************************************************/
  // goToMassenger(where: string, id: number) {
  //   const header = new HttpHeaders({
  //     Authorization: this.basicAuth()
  //   });
  //   return this.http.get(`http://localhost:8080`, {headers: header});
  // }
  /*********************************************************************************************/
}
