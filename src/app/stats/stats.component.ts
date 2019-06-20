import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { Stats } from './stats.model';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
data: Stats [];
ObjectKeys = Object.keys;
doneflag = 0;
constructor(
    private http: HttpClient
  ) {}
  ngOnInit(){
    var flag = 0;
    this.http.get<Stats []>('http://localhost:4200/dealer/cortlandcdj/moxi_stats')
      .subscribe((response) => {
        this.doneflag = 0;
        this.data = <Stats []>response;
        console.log(Object.keys(this.data))
        this.doneflag = 1;
      })
  }
  clickmsg = 'cortlandcdj'
  onClickMe(value: string){
    this.doneflag = 0;
    var flag = 0;
    this.clickmsg = value;
    this.http.get<Stats []>('http://localhost:4200/dealer/'+ this.clickmsg + '/moxi_stats')
      .subscribe((response) => {
        this.data = <Stats []>response;
        for(let res in this.data){
          if(this.data[res] != 0){ flag = 1;}
        }
        if(flag == 0)
          this.data = null;
        this.doneflag = 1;
      })
  }
}
