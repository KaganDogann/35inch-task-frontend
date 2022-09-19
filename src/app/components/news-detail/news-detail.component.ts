import { NewsDetails } from './../../models/newsDetails';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news:NewsDetails;
  constructor(private newsService:NewsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["newsId"]) {
        this.getNewsById(params["newsId"])
      }
      else {

      }
    })
  }
  getNewsById(newsId:number){
     this.newsService.getNewsById(newsId).subscribe(response=>{
      this.news=response.data
      console.log(response)
     })
  }
}
