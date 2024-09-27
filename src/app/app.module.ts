import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './componnets/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from '../misc/HttpHeaderInterceptor';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    FaqComponent,
    MobileAppsComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatAccordion,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
