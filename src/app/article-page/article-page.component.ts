import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../shared/models/article';
import { Comment } from '../shared/models/comment';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  id!: number;
  article!: Article;
  comments!: Comment[];

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getArticle(this.id);
  }

  private getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe((article: Article)=>{
      this.article = article;
      this.getComments(this.article.id);
    });
  }

  private getComments(articleId: number): void{
    this.articleService.getArticleComments(articleId).subscribe((comments: Comment[])=>{
      this.comments = comments;
    });
  }

}
