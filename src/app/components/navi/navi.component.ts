import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalstorageService } from './../../services/localstorage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService, private localStorageService:LocalstorageService,private router:Router,private toastrservice:ToastrService) { }

  ngOnInit(): void {
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.localStorageService.removeToken();
    this.toastrservice.success("başarı ile çıkış yaptınız")
    this.router.navigate([""])

  }
}
