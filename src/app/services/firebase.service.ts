import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private booksCollection: AngularFirestoreCollection<Book>;
  private books: Observable<Book[]>;
  private concertsCollection: AngularFirestoreCollection<any>;
  private concerts: Observable<any[]>;
  private classesCollection: AngularFirestoreCollection<any>;
  private classes: Observable<any[]>;
  private newsCollection: AngularFirestoreCollection<any>;
  private news: Observable<any[]>;
  private usersCollection: AngularFirestoreCollection<any>;
  private users: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.booksCollection = db.collection<Book>('books');

    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.usersCollection = db.collection<any>('users');

    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.concertsCollection = db.collection<any>('concerts');

    this.concerts = this.concertsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.classesCollection = db.collection<any>('classes');

    this.classes = this.classesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.newsCollection = db.collection<any>('news');

    this.news = this.newsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getConcerts() {
    return this.concerts;
  }

  getConcert(id) {
    return this.concertsCollection.doc<any>(id).valueChanges();
  }

  updateConcert(concert: any, id: string) {
    return this.concertsCollection.doc(id).update(concert);
  }

  addConcert(concert: any) {
    return this.concertsCollection.add(concert);
  }

  removeConcert(id) {
    return this.concertsCollection.doc(id).delete();
  }

  getClasses() {
    return this.classes;
  }

  getClass(id) {
    return this.classesCollection.doc<any>(id).valueChanges();
  }

  updateClass(clas: any, id: string) {
    return this.classesCollection.doc(id).update(clas);
  }

  addClass(clas: any) {
    return this.classesCollection.add(clas);
  }

  removeClass(id) {
    return this.classesCollection.doc(id).delete();
  }

  getBooks() {
    return this.books;
  }

  getbook(id) {
    return this.booksCollection.doc<Book>(id).valueChanges();
  }

  updatebook(book: Book, id: string) {
    return this.booksCollection.doc(id).update(book);
  }

  addbook(book: Book) {
    return this.booksCollection.add(book);
  }

  removebook(id) {
    return this.booksCollection.doc(id).delete();
  }

  getNews() {
    return this.news;
  }

  getnew(id) {
    return this.newsCollection.doc<Book>(id).valueChanges();
  }

  updatenew(New: any, id: string) {
    return this.newsCollection.doc(id).update(New);
  }

  addnew(New: any) {
    return this.newsCollection.add(New);
  }

  removenew(id) {
    return this.newsCollection.doc(id).delete();
  }

  getUser(username: string) {
    this.usersCollection = this.db.collection('users', ref => ref.where('username', '==', username));
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.users;
  }
}
