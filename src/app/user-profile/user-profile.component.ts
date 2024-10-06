import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../home/activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  userId: number | undefined;
  constructor(
    private activitySvc: ActivityService,
    private route: ActivatedRoute
  ) {}
  coachData: any;
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.activitySvc.getUserData(this.userId as number).subscribe((data) => {
      this.coachData = data;
    });
  }
}
