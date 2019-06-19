import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
public data: any;
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http.get('http://dmsinformation.services.moxi-dev.com/dealer/cortlandcdj/moxi_stats')
    .subscribe(
        response => {
          // this.data = response;
          console.log("date: " + response);
          // var sample = JSON.stringify(response);
        }
      )
  }

}
