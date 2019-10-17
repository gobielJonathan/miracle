import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import { AnnouncementsRoutingModule } from './announcement-routing.module';
import { AnnouncementPlaceholderComponent } from './announcement-placeholder/announcement-placeholder.component';
import { PlaceholderModule } from 'src/app/template/placeholder/placeholder.module';

@NgModule({
  declarations: [
    AnnouncementComponent,
    AnnouncementPlaceholderComponent
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    PlaceholderModule
  ],
})
export class AnnouncementModule { }
