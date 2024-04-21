import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: User[], id: any): User[] {
    if (!value || !id) return value;
    return value.filter((item) => item.id === id);
  }
}
