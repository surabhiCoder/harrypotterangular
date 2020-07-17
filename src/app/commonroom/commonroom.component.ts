import { Component, OnInit } from '@angular/core';
import { SortingService } from '../sorting.service';
import { Commonroom } from './commonroom.model';
import { ActivatedRoute } from "@angular/router";
import { EventemitterService } from '../eventemitter.service';

@Component({
  selector: 'app-commonroom',
  templateUrl: './commonroom.component.html',
  styleUrls: ['./commonroom.component.scss']
})
export class CommonroomComponent implements OnInit {
  listOfHouses : Commonroom[];
  sortedHouse: {name : string};
  showSortedHouseDetails : any = [];
  sortedHouseId : string;
  sortedHouseMembers : any = [];
  showMembers: boolean = false;

  loaderActive;
  constructor(private sortingService : SortingService, private route: ActivatedRoute, private eventEmitterService: EventemitterService) { }
 

  ngOnInit(){
    this.houseName();
  }

  houseName(){
    this.sortedHouse ={
      name: this.route.snapshot.params['houseName']
    }
   return this.sortingService.getHouses().subscribe(data => {
     this.listOfHouses = data;
     console.log(data);
      for (let index = 0; index < this.listOfHouses.length; index++) {
        if(this.listOfHouses[index].name == this.sortedHouse.name){
          this.showSortedHouseDetails.push(this.listOfHouses[index])
        }
      } 

      setTimeout(() => {
        document.getElementById('loader').setAttribute('class', '');
        document.getElementById('loaderImg').setAttribute("src", "")
      }, 1000);
    })
  }

  onShowMembers(){
    this.sortedHouseMembers = [];
    this.showMembers = true;
    this.sortedHouseId = this.showSortedHouseDetails[0]._id;
    this.sortingService.getHousesDetails(this.sortedHouseId).subscribe(data => {
      this.sortedHouseMembers = data[0].members; 
      console.log(this.sortedHouseMembers);
      
    })
  }

  onClickCharacterId(id){
    this.sortingService.characterId = id;
    this.eventEmitterService.showLoader();
  }
}
