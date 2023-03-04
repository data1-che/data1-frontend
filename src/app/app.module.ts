import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
/* import { AngularFireDatabaseModule } from '@angular/fire/database'; */
import { Firestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { aboutMeComponent } from './components/about-me/about-me.component';
import { BannerComponent } from './components/banner/banner.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiresComponent } from './components/fires/fires.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';

const appRoutes: Routes = [
  {path:"", component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:"portfolio", component: PortfolioComponent},
  {path:"**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    aboutMeComponent,
    BannerComponent,
    ProjectComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    LoginComponent,
    NavbarComponent,
    FiresComponent,
    SoftskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [PortfolioService, { provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
