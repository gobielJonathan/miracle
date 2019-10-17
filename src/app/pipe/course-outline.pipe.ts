import { Pipe, PipeTransform } from '@angular/core';
import { CourseOutline } from '../models/CourseOutline';

@Pipe({
  name: 'courseOutline'
})
export class CourseOutlinePipe implements PipeTransform {

  transform(value: CourseOutline[], ...args: any[]): any {
    const courseName = args[0]
    return value.filter((item : CourseOutline) => item.Name.toLowerCase().includes(courseName.toLowerCase()));
  }

}
