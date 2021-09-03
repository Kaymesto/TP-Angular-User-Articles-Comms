import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from './../../shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  delete(article: Article): void {
    this.articleService.delArticle(article).subscribe((resp) => {
      console.log(resp);
      this.articleService.refreshArticles();
      // this.userDelete.emit("userDelete");
    });
  }

}
