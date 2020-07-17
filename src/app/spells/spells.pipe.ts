import { PipeTransform, Pipe } from '@angular/core';
import { Spells } from './spells.model';

@Pipe({
    name: 'searchSpells'
})

export class SpellsPipe implements PipeTransform{
    transform(listOfSpells: Spells[], search: string):Spells[] {
        if(!listOfSpells || !search){
            return listOfSpells
        }

        return listOfSpells.filter(spells =>
            spells.spell.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}