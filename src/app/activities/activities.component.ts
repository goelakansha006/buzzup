import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../home/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent implements OnInit {
  activityList: any[] = [];
  constructor(private activitySvc: ActivityService) {}
  ngOnInit(): void {
    this.activitySvc.getActivities().subscribe((data: any) => {
      this.activityList = data;
    });

    // this.coachesList = this.activitySvc.getCoach()
  }
}
