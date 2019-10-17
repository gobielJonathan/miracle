import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../models/Job';
import { JOB_URL } from '../../shared/URLs';
import { JobPayload } from '../../models/payload/JobPayload';
import { SemesterService } from './semester.service';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  constructor(
    private http: HttpClient,
    private semesterService : SemesterService
    ) { }

  getJobs(payload: JobPayload): Observable<Job[]> {

    const headers = new HttpHeaders().set("Authorization", `Bearer ${payload.token}`)
    
    const params = new HttpParams()
      .set("mode", payload.mode)
      .set("semesterId", payload.semesterId)
    return this.http.get<Job[]>(JOB_URL, { headers, params });
  }
}
