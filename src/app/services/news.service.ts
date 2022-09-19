import { ResponseModel } from './../models/responseModel';
import { NewsImage } from './../models/newsImage';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { NewsDetails } from './../models/newsDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl="https://localhost:44301/api/"
  constructor(private httpClient:HttpClient) { }

  getNews(pageNumber:Number):Observable<ListResponseModel<NewsDetails>>{
    let newPath=this.apiUrl+"News/getAllNewsDetails?CurrentPage="+pageNumber;
    return this.httpClient.get<ListResponseModel<NewsDetails>>(newPath);
  }

  getNewsTotalPage(){
    let newPath=this.apiUrl+"News/getNewsTotalPages"
    return this.httpClient.get<SingleResponseModel<Number>>(newPath);
  }

  getNewsById(newsId:number):Observable<SingleResponseModel<NewsDetails>>{
    let newPath=this.apiUrl+"News/getById?Id="+newsId;
    return this.httpClient.get<SingleResponseModel<NewsDetails>>(newPath);
  }


  getNewsImagesByNewsId(newsId:number):Observable<ListResponseModel<NewsImage>>{
    let newPath=this.apiUrl+"CarImages/getbycarıd?carId="+newsId;
    return this.httpClient.get<ListResponseModel<NewsImage>>(newPath);
  }

  addNews(news:News):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"News",news)
  }
}
