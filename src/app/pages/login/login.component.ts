import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/messier/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AUTH_SESSION } from 'src/app/shared/Constant';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { REDIRECT_BASE_URL } from 'src/app/shared/Constant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  private subscription : Subscription;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onSubmit() {
    const payload = this.loginForm.value

    Swal.fire({
      title: "Please, Wait...",
      onBeforeOpen : function () {
        Swal.showLoading()
      }
    })

    this.subscription = this.service.login(payload)
      .subscribe((response: string) => {
        this.service.successLogin(response)

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })

        Toast.fire({
          type: 'success',
          title: 'Signed in successfully'
        })
        this.router.navigate([REDIRECT_BASE_URL])
      }, () => {
        Swal.fire({
          type: 'error',
          title: "Failed Authentication",
          text: "Invalid Username or Password"
        })
      })
  }

}
