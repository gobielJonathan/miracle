import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomTransaction } from 'src/app/models/RoomTransaction';
import { ROOM_TRANSACTIONS_URL, ROOM_URL } from 'src/app/shared/URLs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RoomTransactionPayload } from 'src/app/models/payload/RoomTransactionPayload';
import { Room } from 'src/app/models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomTransactionService {

  constructor(
    private http:HttpClient
  ) { }

  getRoomTransaction(payload : RoomTransactionPayload): Observable<RoomTransaction[]>{
    const params = new HttpParams().append("startDate", payload.startDate).append("endDate", payload.endDate).append("includeUnapproved", payload.includeUnapproved ? "true": "false")
    return this.http.get<RoomTransaction[]>(ROOM_TRANSACTIONS_URL,{params})
  }
  getRooms() : Observable<Room[]> {
    return this.http.get<Room[]>(ROOM_URL)
  }
}
