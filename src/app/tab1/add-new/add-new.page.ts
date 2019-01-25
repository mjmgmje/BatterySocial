import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { New } from 'src/app/models/new';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss']
})
export class AddNewPage implements OnInit {
  todo: New;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.todo = new New();
  }

  addNew() {
    this.todo.time = '2d';
    this.firebaseService.addnew(this.todo);
  }
}
