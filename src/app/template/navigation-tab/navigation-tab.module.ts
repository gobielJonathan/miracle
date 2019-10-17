import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTabHeaderComponent } from './navigation-tab-header/navigation-tab-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationTabHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavigationTabHeaderComponent]
})
export class NavigationTabModule { }
