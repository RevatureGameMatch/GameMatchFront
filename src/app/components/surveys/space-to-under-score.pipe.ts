import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToUnderScore'
})
export class SpaceToUnderScorePipe implements PipeTransform {

  transform(value: string): string {
    return value? value.replace(/ /g, "_") : value;
  }

}
