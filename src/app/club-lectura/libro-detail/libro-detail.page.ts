import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.page.html',
  styleUrls: ['./libro-detail.page.scss'],
})
export class LibroDetailPage implements OnInit {

  libroToShow: any;
  books = environment.books;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = String(params.get('paramId'));
      this.firebaseService.getbook(param1).subscribe(data =>
        this.libroToShow = data);
    });
  }

}
