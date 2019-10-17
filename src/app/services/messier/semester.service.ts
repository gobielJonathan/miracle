import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Semester } from 'src/app/models/Semester';
import { SEMESTER_URL } from 'src/app/shared/URLs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  active : Subject<Semester>

  constructor(
    private http:HttpClient
  ) { 
    this.active = new BehaviorSubject<Semester>(null)
  }
  
  
  getSemster() : Observable<Semester[]> {
    return this.http.get<Semester[]>(SEMESTER_URL)
  }
}
