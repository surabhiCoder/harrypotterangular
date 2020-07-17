import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { GreatHallComponent } from './great-hall/great-hall.component';
import { CommonroomComponent } from './commonroom/commonroom.component';
import { SpellsComponent } from './spells/spells.component';
import { CategoriesService } from './categories/categories.service';


const routes: Routes = [
  {path : '', component: GreatHallComponent},
  {path : 'commonroom/:houseName', component: CommonroomComponent},
  {path : 'member/:memberName', component: CategoriesComponent, canActivate: [CategoriesService]},
  {path : 'spells', component: SpellsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
