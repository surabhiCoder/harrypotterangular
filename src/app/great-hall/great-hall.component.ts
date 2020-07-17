import { Component, OnInit, ViewChild } from '@angular/core';
import { SortingService } from '../sorting.service';
import { EventemitterService } from '../eventemitter.service';

@Component({
  selector: 'app-great-hall',
  templateUrl: './great-hall.component.html',
  styleUrls: ['./great-hall.component.scss']
})
export class GreatHallComponent implements OnInit {

  public houseName: string;
  showCommonRoom: boolean = false;
  showLoader: string;
  constructor(private sortingService: SortingService, private eventEmitterService: EventemitterService){
  }

  ngOnInit(){

  }
  
  studentSorting(){
    return this.sortingService.getSortingHouse().subscribe(data => {
      this.showCommonRoom = true;
      this.houseName = data;
      this.sortingService.houseName = this.houseName;
    });
  }

  goToCR(){
    this.eventEmitterService.showLoader();  
  }

}
