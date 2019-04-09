import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';
import { Book } from '../models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-club-lectura',
  templateUrl: './club-lectura.page.html',
  styleUrls: ['./club-lectura.page.scss'],
})
export class ClubLecturaPage  {

  isAdmin: string;
  books: Array<Book>;
  unsub: Subscription;

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ionViewWillEnter(): void {
    if (!this.books) {
    this.unsub = this.firebaseService.getBooks().subscribe(data =>
      this.books = data);
      this.isAdmin = sessionStorage.getItem('isAdmin');
    }
  }
  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/libroDetail/' + id]);
  }

  ionViewDidLeave(): void {
    this.unsub.unsubscribe();
  }

  GoToAddBook() {
    this.router.navigate(['dashboard/tabs/AddBook/']);
  }

}
