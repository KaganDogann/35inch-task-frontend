import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NaviComponent } from './components/navi/navi.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { ToastrModule } from 'ngx-toastr';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsAddComponent } from './components/admin/components/news-add/news-add.component';
import { AdminPageComponent } from './components/admin/components/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NaviComponent,
    LoginComponent,
    CategoryComponent,
    NewsDetailComponent,
    NewsAddComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
