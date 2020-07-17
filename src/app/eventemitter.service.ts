import { Injectable, EventEmitter } from '@angular/core';
import { SortingService } from './sorting.service';

@Injectable({
  providedIn: 'root'
})
export class EventemitterService {
  constructor(private sortingService: SortingService) { }

  showLoader(){
    if (this.sortingService.houseName == "Hufflepuff") {
      document.getElementsByTagName('body')
      document.getElementById('loader').classList.add("h_loader");
      document.getElementById('loaderImg').setAttribute("src", "assets/images/hufflepuff_loader.png")
    }
    else if (this.sortingService.houseName == "Ravenclaw") {
      document.getElementById('loader').classList.add("r_loader");
      // document.getElementById('wrapper').classList.add("r_loader");
      document.getElementById('loaderImg').setAttribute("src", "assets/images/Ravenclaw_loader.png")
    }
    else if (this.sortingService.houseName == "Gryffindor") {
      document.getElementById('loader').classList.add("g_loader");
      // document.getElementById('wrapper').classList.add("g_loader");
      document.getElementById('loaderImg').setAttribute("src", "assets/images/gryffindor_loader.png")
    }
    else if (this.sortingService.houseName == "Slytherin") {
      document.getElementById('loader').classList.add("s_loader");
      // document.getElementById('wrapper').classList.add("s_loader");
      document.getElementById('loaderImg').setAttribute("src", "assets/images/Slytherin_loader.png")
    }
  }
}
