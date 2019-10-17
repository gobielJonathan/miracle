import { Component, OnInit } from '@angular/core';
import { RoomTransactionService } from 'src/app/services/messier/room-transaction.service';
import { RoomTransaction, RoomTransactionDetail } from 'src/app/models/RoomTransaction';
import { RoomTransactionPayload } from 'src/app/models/payload/RoomTransactionPayload';
import { Router } from '@angular/router';
import { Timeline } from 'src/app/models/Timeline';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-room-transaction',
  templateUrl: './room-transaction.component.html',
  styleUrls: ['./room-transaction.component.scss']
})
export class RoomTransactionComponent implements OnInit {

  roomTransaction$: Observable<RoomTransaction[]>

  constructor(
    private service: RoomTransactionService,
    private router: Router
  ) { }

  ngOnInit() {
    const payload: RoomTransactionPayload = {
      startDate: "10/6/2019",
      endDate: "10/6/2019",
      includeUnapproved: true
    }
    this.roomTransaction$ = this.service.getRoomTransaction(payload)
  }
  

  seeDetail(roomDetail: RoomTransactionDetail[][]) {

    const timeline: Timeline[] = []
    let content: string[]
 
    for (const key in roomDetail) {
      content = []

      const details = roomDetail[key];

      for (const detail of details) {
        content.push(`${detail.Description}, (${detail.Assistant || '-'})`)
      }

      timeline.push({
        content: content,
        date: (parseInt(key) + 1).toString()
      })
    }

    this.router.navigate(['/timeline'],{
      queryParams : {
        q : btoa(JSON.stringify(timeline))
      }

    });
  }

}
