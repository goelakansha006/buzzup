import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { ActivitiesComponent } from './activities/activities.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'apps',
    component: MobileAppsComponent,
  },
  {
    path: 'activity',
    component: ActivitiesComponent,
  },
  {
    path: 'user/:id',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
