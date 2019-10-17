import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/messier/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit() {
  }

  closeModal(){
    this.service.toggleModal()
  }

}
