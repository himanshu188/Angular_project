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
data: any;

constructor(
    private http: HttpClient
  ) {}

  ngOnInit(){
    const headers = new HttpHeaders().set("Accept","*/*");
    this.http.get<Stats []>('http://localhost:4200/dealer/cortlandcdj/moxi_stats',{headers})
      .subscribe((response) => {
        this.data = <Stats []>response;
        console.log(this.data)
        // console.log(datas)
      })
  }
  clickmsg = 'Cortland'
  onClickMe(value: string){
    this.clickmsg = value;
    this.http.get<Stats []>('http://localhost:4200/dealer/'+ this.clickmsg + '/moxi_stats')
      .subscribe((response) => {
        this.data = <Stats []>response;
        console.log(this.data)
        // console.log(datas)
      })
  }

  onSubmit(){
    console.log('working');
  }
}
