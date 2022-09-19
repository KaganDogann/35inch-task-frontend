import { CategoryService } from './../../services/category.service';
import { NewsDetails } from './../../models/newsDetails';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  baseUrl="https://localhost:44306/Uploads/Images/"
  news:NewsDetails[]
  imageOfPath:string;
  totalPageNumber:Number
  fakeArray = new Array();
  constructor(private newsService:NewsService, private categoryService:CategoryService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]) {
        this.getCategoryNews(params["categoryId"])
      }
      else {
        this.getTotalPage();
        this.getNews(0)
      }
    })
  }

  getNews(pageNumber:Number){
    this.newsService.getNews(pageNumber).subscribe(response=>{
      console.log(response);
      this.news=response.data
  })
  }

  getTotalPage(){
    this.newsService.getNewsTotalPage().subscribe(response =>{
      console.log(response);
      this.totalPageNumber=response.data
      this.fakeArray = new Array(this.totalPageNumber);
  })
  }

  getCategoryNews(categoryId:number){
    this.categoryService.getNewsByCategoryId(categoryId).subscribe(response=>{
      this.news=response.data
    })
  }

  getImage(newsId:number){
    this.newsService.getNewsImagesByNewsId(newsId).subscribe(response=>{
      const imagePath=response.data[0].imagePath
      this.imageOfPath= this.baseUrl+imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath

  }

}
