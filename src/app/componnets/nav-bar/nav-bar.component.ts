import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  isDesktop = false;

  constructor(private deviceService: DeviceDetectorService){}

  ngOnInit(): void {
    this.isDesktop =this.deviceService.isDesktop();
  }

}
