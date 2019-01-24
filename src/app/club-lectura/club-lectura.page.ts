import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-club-lectura',
  templateUrl: './club-lectura.page.html',
  styleUrls: ['./club-lectura.page.scss'],
})
export class ClubLecturaPage implements OnInit {

  books: Array<Book>;

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getBooks().subscribe(data =>
      this.books = data);
  }
  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/libroDetail/' + id]);

  }

}
