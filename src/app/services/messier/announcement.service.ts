import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/models/Announcement';
import { ANNOUNCEMENT_URL } from 'src/app/shared/URLs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http:HttpClient) { }

  getAnnouncement(token : string) :Observable<string> {
    const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`)
    return this.http.get<string>(ANNOUNCEMENT_URL,{headers});
  }
}
