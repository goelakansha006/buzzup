import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../home/activity.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit{
  faq :any = {};
  ctx = {tab: 'General'};
  tabs = ['About Us','General','Parents','Coaches']
  constructor(private activitySvc: ActivityService){

  }
  ngOnInit(): void {
      this.faq = this.activitySvc.getFAQ()
  }

  tabChanged(tab:string){
    this.ctx.tab = tab
  }



}
