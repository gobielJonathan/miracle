import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomGenerationRoutingModule } from './room-generation-routing.module';
import { RoomGenerationComponent } from './room-generation.component';


@NgModule({
  declarations: [RoomGenerationComponent],
  imports: [
    CommonModule,
    RoomGenerationRoutingModule,
  ]
})
export class RoomGenerationModule { }
