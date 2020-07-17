import { Component, OnInit } from '@angular/core';
import { EventemitterService } from './eventemitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private eventEmitterService: EventemitterService){}

  ngOnInit(){
  }
}
