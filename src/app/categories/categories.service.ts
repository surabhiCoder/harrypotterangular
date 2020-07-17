import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SortingService } from '../sorting.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements CanActivate {
  constructor(private router: Router, private sortingService: SortingService) { }
  canActivate(): boolean{
    const characterId = !!this.sortingService.characterId;

    console.log(characterId);
    if(characterId){
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
    
  }
  
}
