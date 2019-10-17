import { Component, OnInit } from '@angular/core';
import { RoomGeneration } from 'src/app/models/RoomGeneration';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/services/messier/room.service';
import { Room } from 'src/app/models/Room';

@Component({
  selector: 'app-room-generation',
  templateUrl: './room-generation.component.html',
  styleUrls: ['./room-generation.component.scss']
})
export class RoomGenerationComponent implements OnInit {

  roomGenerations: RoomGeneration[];
  roomAvailable: Map<string, string> = new Map()

  constructor(
    private service: RoomService
  ) {
    this.roomGenerations = [
      {
        generation: "17-2",
        room: "-"
      },
      {
        generation: "18-1",
        room: "-"
      },
      {
        generation: "18-2",
        room: "-"
      },
      {
        generation: "19-1",
        room: "-"
      },
      {
        generation: "19-2",
        room: "-"
      }
    ]
  }

  ngOnInit() {
  }

  async showModalBorrowing(roomGeneration : RoomGeneration) {
    let subscription : Subscription;

    Swal.fire({
      title : "Loading...",
      onBeforeOpen : ()=> {
        Swal.showLoading()
      }
    })

    const inputOptions = await new Promise<any>((resolve) => {
      let rooms = {}
       subscription= this.service.getRooms()
        .subscribe(res => {
          res.forEach(room => {
            rooms[room.Name] = room.Name
          });
          resolve(rooms)
        })
    })

    subscription.unsubscribe()

    const { value: room } = await Swal.fire({
      title: 'Select Room',
      input: 'select',
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!'
        }
      }
    })

    if (room) {
      roomGeneration.room = room
    }

  }


}
