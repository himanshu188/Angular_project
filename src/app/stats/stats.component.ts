import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
// import {Observable} from "rxjs/Observable";
import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { Stats } from './stats.model';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
data$: Stats[];

constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(){
    const headers = new HttpHeaders().set("Accept","*/*")
    this.http.get('http://localhost:4200/dealer/cortlandcdj/moxi_stats',{headers})
      .subscribe((respone) => {
        console.log(respone)
      })





    // let obs = this.http.get('http://dmsinformation.services.moxi-dev.com/dealer/cortlandcdj/moxi_stats');




    // obs.subscribe(() => {
    //   console.log('Working')
    // })
    // this.http.get<Stats[] >('http://dmsinformation.services.moxi-dev.com/dealer/cortlandcdj/moxi_stats')
    // .subscribe(
    //     response => {
    //       console.log(response)
    //       // this.data$ = response
    //       // this.data = response;
    //       // console.log("date: " + response);
    //       // var sample = JSON.stringify(response);
    //     }
    //   )
  }

}
