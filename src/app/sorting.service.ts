import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Commonroom } from './commonroom/commonroom.model';
import { Categories } from './categories/categories.model';
import { Spells } from './spells/spells.model';


@Injectable({
  providedIn: 'root'
})
export class SortingService {
  public characterId;
  public houseName;

  apiUrl = 'https://www.potterapi.com/v1';
  apiKey: string = "$2a$10$XVSK.CPTYRBfXvbGwtKAguGtydOQdO3d1rxLuLO5npR9oxREUwdKC";
  constructor(private _http: HttpClient) { 
  }

  getSortingHouse(){
    return this._http.get<any>(this.apiUrl+'/sortingHat');
  }

  getCategories(characterId){
    return this._http.get<Categories[]>(this.apiUrl +'/characters/'+characterId+'?key=' +this.apiKey);
  }

  getHouses(){
    return this._http.get<Commonroom[]>(this.apiUrl+'/houses?key='+ this.apiKey);
  }

  getHousesDetails(houseId){
    return this._http.get<Commonroom[]>(this.apiUrl+'/houses/'+houseId+'?key='+ this.apiKey);
  }

  getAllSpells(){
    return this._http.get<Spells[]>(this.apiUrl+'/spells?key='+ this.apiKey);
  }
}
