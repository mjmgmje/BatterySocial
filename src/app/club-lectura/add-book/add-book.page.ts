import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Book } from '../../models/book';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  FormBook: FormGroup;

  constructor(private fb: FormBuilder,
    private firebaseService: FirebaseService) {
      this.FormBook = new FormGroup({
        name: new FormControl(),
        thumb: new FormControl(),
        description: new FormControl(),
      });
     }

  ngOnInit() {
  }

  addBook(value: Book) {
    const data = JSON.parse(JSON.stringify(value));
    this.firebaseService.addbook(data);
  }

}
