import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { ActivitiesComponent } from './activities/activities.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "login",component : LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'faq',
    component: FaqComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'apps',
    component: MobileAppsComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'activity',
    component: ActivitiesComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserProfileComponent,
    canActivate :[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
