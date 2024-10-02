import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../home/activity.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  constructor(private activitySvc: ActivityService){
    
  }
  coachData :any;
  ngOnInit(): void {
      this.coachData = this.activitySvc.getUSerData()
  }
}
