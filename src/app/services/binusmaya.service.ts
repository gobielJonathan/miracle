import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ClassSchedulePayload } from '../models/payload/ClassSchedulePayload';
import { Observable } from 'rxjs';
import { ClassSchedule } from '../models/ClassSchedule';
import { CLASS_SCHEDULE_URL } from '../shared/URLs';

@Injectable({
  providedIn: 'root'
})
export class BinusmayaService {

  constructor(private http: HttpClient) { }

  getClassSchedule(payload: ClassSchedulePayload): Observable<ClassSchedule[]> {
    const headers = new HttpHeaders().append("Authorization", `Bearer ${payload.token}`)
    const params = new HttpParams().append("nim", payload.nim)
      .append("startDate", payload.startDate)
      .append("endDate", payload.endDate)

    return this.http.get<ClassSchedule[]>(CLASS_SCHEDULE_URL, { headers, params });

  }
}
