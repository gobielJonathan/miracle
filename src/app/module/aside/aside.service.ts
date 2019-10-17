import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AsideService {
  show: boolean;

  constructor() { this.show = false }
  toggle() { this.show = !this.show }
}
