import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from './../../../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {
  newsAddForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private newsService: NewsService,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
  }

  createBrandAddForm() {
    this.newsAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  add() {
    if (this.newsAddForm.valid) {
      let brandModel = Object.assign({}, this.newsAddForm.value);
      this.newsService.addNews(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message), 'başarılı';
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}
