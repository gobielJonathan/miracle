import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomTransactionRoutingModule } from './room-transaction-routing.module';
import { RoomTransactionComponent } from './room-transaction.component';
import { LoadingModule } from 'src/app/template/loading/loading.module';
import { PlaceholderModule } from 'src/app/template/placeholder/placeholder.module';
import { RoomTransactionPlaceholderComponent } from './room-transaction-placeholder/room-transaction-placeholder.component';

@NgModule({
  declarations: [RoomTransactionComponent, RoomTransactionPlaceholderComponent],
  imports: [
    CommonModule,
    RoomTransactionRoutingModule,
    LoadingModule,
    PlaceholderModule
  ]
})
export class RoomTransactionModule { }
