import { Component } from '@angular/core';
import {Dataservice } from './dataservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string;
  weatherData:any;
  weatherList=[];

  currentWeather:any={};
  today:any=new Date()
  constructor(private data:Dataservice){}

  getCurrentWeather(){
    this.data.getCurrentData(this.city).subscribe((d)=>{
    this.currentWeather=d;
    this.currentWeather.dateToAppend=this.today;
    
    })
  }

  getData(){
  this.getCurrentWeather();
  this.data.getFact(this.city).subscribe((d)=>{
      this.weatherData=d;
      let index=8;
      this.weatherList=[]
      for(let i=0;i<5;i++){
        this.weatherList.push(this.weatherData.list[index]);
        index+=8;
      }
      console.log(this.weatherList);

    }),
    (error=>{
      alert('enter valid city');
    })
    
  }
}
