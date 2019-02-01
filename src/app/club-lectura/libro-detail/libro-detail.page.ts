import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.page.html',
  styleUrls: ['./libro-detail.page.scss']
})
export class LibroDetailPage {
  libroToShow: any;
  books = environment.books;
  comments = [];
  message: string;
  param1: string;
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.param1 = String(params.get('paramId'));
      this.firebaseService
        .getbook(this.param1)
        .subscribe(data => (this.libroToShow = data));
      this.getComments(this.param1);
    });
  }
  ionViewDidLeave() {
    this.comments = [];
    this.message = '';
  }

  getComments(Id: string) {
    this.firebaseService.getUsersCommentsFromBook(Id).subscribe(data =>
      data.forEach(Uscom =>
        this.firebaseService.getUserID(Uscom.userid).subscribe(user => {
          const comentario = {
            photo: (user as any).img,
            nombre: (user as any).username,
            comment: Uscom.comment
          };
          if (!(this.comments.includes(comentario))) {
            console.log(this.comments);
            console.log(!(this.comments.includes(comentario)));
            this.comments.push(comentario);
          }
        })
      )
    );
  }

  sendComment() {
    this.firebaseService.addComment({
      comment: this.message,
      bookid: this.param1,
      userid: sessionStorage.getItem('userid')
    });
    this.comments = [];
    this.message = '';
  }
}
