import { Component, OnInit } from '@angular/core';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { MediaProvider } from 'src/app/providers/core/media';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public users: any[] = [
    { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead", color: '#ccc' },
    { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
    { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
    { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer" },
    { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
    { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
    { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer" }];
  constructor(
    private globals: GlobalsProvider,
    private media: MediaProvider
  ) {
    this.globals.fullScreen = false;
  }

  ngOnInit() {
  }

}
