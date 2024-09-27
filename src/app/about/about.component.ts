import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../home/activity.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  implements OnInit{
  aboutBuzzUp :any = {};
  aboutTeam :any = {}
  constructor(private activitySvc: ActivityService){

  }
  ngOnInit(): void {
      this.aboutBuzzUp = this.activitySvc.getAboutBuzzup()
      this.aboutTeam = this.activitySvc.getAboutTeam()
  }



}
