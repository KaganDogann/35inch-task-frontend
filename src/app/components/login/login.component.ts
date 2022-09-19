import { LocalstorageService } from './../../services/localstorage.service';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userEmail:string;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService ,
    private userService:UserService,
    private router:Router,
    private localStorage:LocalstorageService) { }

  ngOnInit(): void {
    //this.createLoginForm()
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    if (this.loginForm.valid) {
     // console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.localStorage.saveToken(response.data.token)
        this.router.navigate(["admin/newsAdd"]);
        this.toastrService.info("Giriş Yapıldı")
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }
}
