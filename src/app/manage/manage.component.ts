import { Component, OnInit } from '@angular/core';
import { FlipcardsService } from '../flipcards.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  flipcards: Object;
  //flipcards: Object;

  flipcard = {}

  constructor(
    private http: HttpClient, 
    private router: Router,
    private flipcardsService: FlipcardsService
  ) { }

  ngOnInit() {
    this.getFlipcards();
    console.log(this.flipcards);
  }

  getFlipcards(): void {
    this.flipcardsService.getFlipcards()
      .subscribe((flipcards) => (this.flipcards = flipcards));
  }


  removeFlipcard(flipcard) {
    this.flipcardsService.removeFlipcard(flipcard);
  }

}
