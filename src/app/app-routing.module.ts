import { LoginGuard } from './guards/login.guard';
import { AdminPageComponent } from './components/admin/components/admin-page/admin-page.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" ,pathMatch:"full", component:NewsComponent},
  {path:"news",component:NewsComponent},
  {path:"admin",component:LoginComponent},
  {path:"admin/page",component:AdminPageComponent},
  {path:"admin/newsAdd",component:AdminPageComponent,canActivate:[LoginGuard]},
  {path:"news/:newsId", component:NewsDetailComponent},
  {path:"category/:categoryId", component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
