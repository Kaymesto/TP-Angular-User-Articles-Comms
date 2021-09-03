import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from './../../shared/services/article.service';
import { Article } from './../../shared/models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  articleForm: FormGroup;

  article!: Article;
  idArticle?: number;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private route: ActivatedRoute) {
    this.articleForm = this.fb.group({
      id: new FormControl("", [Validators.required, Validators.min(0), Validators.maxLength(4000000000000000000)]),
      userId: new FormControl("", [Validators.required, Validators.min(0), Validators.maxLength(4000000000000000000)]),
      title: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      body: new FormControl("", [Validators.maxLength(1000), Validators.required]),
    });
  }

  ngOnInit(): void {
    this.idArticle = parseInt(this.route.snapshot.paramMap.get('id') || "0");
    this.articleService.getArticle(this.idArticle).subscribe((article) => {
      this.article = article;
    });
  }

  updateArticle(): void {
    console.log(this.articleForm);
    this.articleService.putArticle(this.articleForm.value).subscribe((newArticle: Article) => {
      console.log(newArticle);
      this.articleForm.reset();
    });
    console.log(this.articleForm);
  }

}
