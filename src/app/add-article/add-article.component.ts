import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArticleService } from './../shared/services/article.service';
import { Article } from './../shared/models/article';



@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleForm: FormGroup;


  constructor(private fb: FormBuilder, private articleService: ArticleService) {

    this.articleForm = this.fb.group({
      idUser: new FormControl("", [Validators.required, Validators.min(0), Validators.maxLength(4000000000000000000)]),
      title: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      body: new FormControl("", [Validators.maxLength(1000), Validators.required]),
    });

  }

  ngOnInit(): void {
  }

  addArticle(): void {
    if (this.articleForm.status === "VALID") {
      this.articleService.postArticle(this.articleForm.value).subscribe((newArticle: Article) => {
        console.log(newArticle);
        this.articleForm.reset();
      });
    }
    console.log(this.articleForm);
  }

}
