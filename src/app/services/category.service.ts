import { NewsDetails } from './../models/newsDetails';
import { Observable } from 'rxjs';
import { ListResponseModel } from './../models/listResponseModel';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44301/api/"
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrl+"Genres/getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

  getNewsByCategoryId(categoryId:number):Observable<ListResponseModel<NewsDetails>>{
    let newPath=this.apiUrl+"Genres/getNewsByGenreId?GenreId="+ categoryId;
    return this.httpClient.get<ListResponseModel<NewsDetails>>(newPath);
  }
}
