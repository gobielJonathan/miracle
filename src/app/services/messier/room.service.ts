import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../../models/Room';
import { ROOM_URL } from '../../shared/URLs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http : HttpClient
  ) { }

  getRooms() : Observable<Room[]>{
    return this.http.get<Room[]>(ROOM_URL);
  }
}
