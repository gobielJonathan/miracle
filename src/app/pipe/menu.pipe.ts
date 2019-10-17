import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../models/Menu';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(value: Menu[], ...args: any[]): any {
    const menu = args[0]
    return value.filter(value => value.name.toLowerCase().includes(menu));
  }

}
