import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomTransactionComponent } from './room-transaction.component';

const routes: Routes = [{ path: '', component: RoomTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomTransactionRoutingModule { }
