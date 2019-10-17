import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseOutline } from '../../models/CourseOutline';
import { COURSE_OUTLINE_URL } from '../../shared/URLs';
import { CourseOutlinePayload } from '../../models/payload/CourseOutlinePayload';
import { SemesterService } from './semester.service';

@Injectable({
  providedIn: 'root'
})
export class CourseOutlineService {

  constructor(
    private http: HttpClient,
    private semesterService:SemesterService
  ) { }

  getCourseOutlines(payload: CourseOutlinePayload): Observable<CourseOutline[]> {
    
    const params = new HttpParams().set('semesterId', payload.semesterId)
    return this.http.get<CourseOutline[]>(COURSE_OUTLINE_URL, { params: params });
  }
}
