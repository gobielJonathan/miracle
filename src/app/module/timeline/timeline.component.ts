import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/models/Timeline';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelines: Timeline[]

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      try {
        const urlDecoding = atob(params.get('q'))
        this.timelines = JSON.parse(urlDecoding)
      } catch (error) {
        Swal.fire({
          type : "error",
          title : "Ups, Something Wrong..."
        })
      }
    })

  }

  back() {
    this.location.back()
  }

}
