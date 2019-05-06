import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  private todayDate: any;
  public progressResult: number;

  constructor() { 
    this.todayDate = new Date().getTime();
    this.progressBarChecking();
  }

  //function for checking Progress bar input
  progressBarChecking() {
    // Backend Code
    this.progressResult = 70;
  }

  ngOnInit() {
  }

  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }
}
