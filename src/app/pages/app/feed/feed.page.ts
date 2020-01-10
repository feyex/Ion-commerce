import { Component, OnInit } from '@angular/core';
import { GlobalsProvider } from 'src/app/providers/core/globals';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  color: string = "#ccc";
  public activities: any[] = [
    { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead", images: [
      "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
    ] },
    { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
    { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
    { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer", images: [
      "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
    ] },
    { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
    { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
    { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer", images: [
      "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
    ] }];
  constructor(
    public globals: GlobalsProvider
  ) { }

  ngOnInit() {
  }

}
