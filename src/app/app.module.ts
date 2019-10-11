import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginAndSignUpComponent } from './login-and-sign-up/login-and-sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UsrInfoComponent } from './profile/usr-info/usr-info.component';
import { UsrDataComponent } from './profile/usr-data/usr-data.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { AppRouting } from './share/Routing/app-routing';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateComponent } from './profile/create/create.component';
import { PostingComponent } from './posting/posting.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';
import {HttpClientModule} from "@angular/common/http";
import { ReadMoreJobComponent } from './read-more-job/read-more-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginAndSignUpComponent,
    ProfileComponent,
    UsrInfoComponent,
    UsrDataComponent,
    SearchJobsComponent,
    HomePageComponent,
    CreateComponent,
    PostingComponent,
    MessageSenderComponent,
    ReadMoreJobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
