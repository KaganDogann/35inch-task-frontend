import { Observable } from 'rxjs';
import { RegisterModel } from './../models/registerModel';
import { TokenModel } from './../models/tokenModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { LoginModel } from './../models/loginModel';
import { LocalstorageService } from './localstorage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44306/api/auth/';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalstorageService
  ) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // register(
  //   registerModel: RegisterModel
  // ): Observable<SingleResponseModel<TokenModel>> {
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(
  //     this.apiUrl + 'register',
  //     registerModel
  //   );
  // }
}
