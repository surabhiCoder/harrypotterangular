import { Component, OnInit } from '@angular/core';
import { SortingService } from '../sorting.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  listOfSpells : any = [];
  search : string;
  constructor(private spellsService: SortingService) { }

  ngOnInit(){
    this.spellsService.getAllSpells().subscribe(data =>{
      this.listOfSpells = data;
    })
  }
}
