import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/messier/announcement.service';
import { Announcement } from 'src/app/models/Announcement';
import { AuthService } from 'src/app/services/messier/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements : Announcement[]
  loading : boolean = true
  subscription : Subscription;

  constructor(
    private service : AnnouncementService,
    private authService : AuthService
    ) {
  }

  ngOnInit() {
    this.subscription = this.service.getAnnouncement(this.authService.token)
          .subscribe( (response:string) => {
            const {news} = JSON.parse(response)
              this.announcements = news

          })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }

}
