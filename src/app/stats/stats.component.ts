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
data: Stats [];
datas = [];
ObjectKeys = Object.keys;
doneflag = 0;
constructor(
    private http: HttpClient
  ) {}
  keys() : Array<String>{
    return Object.keys(this.datas[0])
  }
  ngOnInit(){
    var flag = 0;
    const headers = new HttpHeaders().set("Accept","*/*");
    this.http.get<Stats []>('http://localhost:4200/dealer/cortlandcdj/moxi_stats',{headers})
      .subscribe((response) => {
        this.doneflag = 0;
        this.data = <Stats []>response;
        this.datas.push(response);
        console.log(this.data)
        console.log(this.datas[0])
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
        // ObjectKeys = Object.keys(this.data)
        this.datas = [];
        this.datas.push(response);
        console.log(Object.keys(this.data))
        for(let res in this.datas[0]){
          console.log(this.datas[0][res])
          if(this.datas[0][res] != 0){ flag = 1;}
        }
        if(flag == 0)
          this.data = null;
        this.doneflag = 1;
      })
  }

  onSubmit(){
    console.log('working');
  }
}
