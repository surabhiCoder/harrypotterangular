import { Component, OnInit } from '@angular/core';
import { Categories } from './categories.model';
import { SortingService } from '../sorting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories : any = [];
  // characterDet : {id : string}
  characterId: string;
  constructor(private sortingService : SortingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.characterId = this.sortingService.characterId;
    this.characters();
  }

  characters(){
    // this.characterDet={
    //   id: this.route.snapshot.params['id']
    // }
    return this.sortingService.getCategories(this.characterId).subscribe(data => 
      {
        this.categories.push(data);
        console.log(this.categories);
        setTimeout(() => {
          document.getElementById('loader').setAttribute('class', '');
          document.getElementById('loaderImg').setAttribute("src", "")
        }, 1000);
      });
  }

}
