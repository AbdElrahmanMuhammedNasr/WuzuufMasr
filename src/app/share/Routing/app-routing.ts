import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProfileComponent } from 'src/app/profile/profile.component';
import { SearchJobsComponent } from 'src/app/search-jobs/search-jobs.component';
import { LoginAndSignUpComponent } from 'src/app/login-and-sign-up/login-and-sign-up.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { CreateComponent } from 'src/app/profile/create/create.component';
import { PostingComponent } from 'src/app/posting/posting.component';
import { MessageSenderComponent } from 'src/app/message-sender/message-sender.component';
import {ReadMoreJobComponent} from "../../read-more-job/read-more-job.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/login' , pathMatch: 'full'},
    { path: 'home', component: HomePageComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'search', component: SearchJobsComponent},
    { path: 'login', component: LoginAndSignUpComponent},
    { path: 'operation/:what', component: CreateComponent},
    { path: 'post', component: PostingComponent},
    { path: 'messager', component: MessageSenderComponent},
    { path: 'more', component: ReadMoreJobComponent}


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ] ,
    exports: [
        RouterModule
    ]

})
export class AppRouting {

}
