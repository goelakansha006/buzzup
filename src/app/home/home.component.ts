import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  activityList: any[] = [];
  coachesList: any[] = [];
  obj = ['', '', '', ''];

  buzzupWorks = [
    {
      id: 1,
      color: '#7bead6',
      title: 'Find your tutor.',
      subTitle:
        'We’ll connect you with a tutor who will motivate, challenge, and inspire you.',
      image: '../../assets/Screenshot 2024-09-26 at 5.26.16 PM.png',
    },
    {
      id: 2,
      color: '#ffe03d',
      title: 'Start learning.',
      subTitle:
        'Your tutor will guide the way through your first lesson and help you plan your next steps.',
      image: '../../assets/Screenshot 2024-09-26 at 5.26.28 PM.png',
    },
    {
      id: 3,
      color: '#2885fd',
      title: 'Speak. Read. Write. Repeat.',
      subTitle:
        'Choose how many lessons you want to take each week and get ready to reach your goals!',
      image: '../../assets/Screenshot 2024-09-26 at 5.26.33 PM.png',
    },
  ];

  buzzupValues = [
    {
      icon: 'house',
      title: 'Convenient Lessons',
      subTitle:
        "People are busy these days, we get that. That's why you have the option of taking lessons in your home, online or at a nearby teacher's studio.",
    },
    {
      icon: 'safety_check',
      title: 'Safe & Secure',
      subTitle:
        'Instructors can opt to have a background check on file. You can request to only be connected with teachers that have a check. The choice is yours.',
    },
    {
      icon: 'school',
      title: 'Skilled Teachers',
      subTitle:
        'The instructors in our network create their own lesson plans based on what is best for you or your child.',
    },
    {
      icon: 'payments',
      title: 'Easy Payment',
      subTitle:
        'You pay for lessons, that’s it. Choose from our pay as you go monthly billing or opt for a set of lessons.',
    },
  ];

  constructor(private activitySvc: ActivityService, private router: Router) {}

  ngOnInit(): void {
    this.activityList = this.activitySvc.getActivities();

    this.coachesList = this.activitySvc.getCoach();
    this.coachesList = this.coachesList.filter((value, index, self) => {
      return self.findIndex((v) => v.name === value.name) === index;
    });
  }

  showCoach(id: number) {
    this.router.navigate(['/', 'user', id]);
  }
}
