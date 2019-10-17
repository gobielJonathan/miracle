import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../../shared/URLs';
import { AUTH_SESSION } from '../../shared/Constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  /** 
   * only has login modal
   */
  private _token: string
  showModal: boolean = false

  constructor(private http: HttpClient) { }

  toggleModal() {
    this.showModal = !this.showModal
  }

  login(payload: object): Observable<string> {
    return this.http.post<string>(LOGIN_URL, payload);
  }

  logout() : void {
    this.token = null
    localStorage.removeItem(AUTH_SESSION)
  }


  public set token(v: string) {
    this._token = v;
    localStorage.setItem(AUTH_SESSION, this._token)
  }

  public get token(): string {
    // return "70fPJGZ5jB-xSki74yr_nUkV-OByDeb5UkrcYP5IwLUA_hZpEZ84eVzzub63VxARsvtk6adj-m1dODOyNbKbLyIPYYrXVuArDOKnjmtjxhnibjweuPSP_PVXfLkQQU7w7cCorLhDO9oPdJphgGl0CWwT7Kam4MGGhX3N5oeZaesqnxJUAijX5tbOx9hUdd1WqAxeZOSULn1Bi1PPA9ZEN63BbU54zCzF8AyhMRwjV0ZiHVpjqcOZnCc2_QvOMWHqIvm74p-0EA1LBBH_hgrPHZ07DtAdlYZKbNLtWI6JpAPo_wsdJetT8gpag1nb-4zcf3vzKg"
    
    const localToken = localStorage.getItem(AUTH_SESSION)
    if (!this._token && localToken)
      this._token = localToken
    return this._token
  }

  successLogin(token: string) {
    this.token = token
    this.toggleModal()
  }

}

