import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  flipcard = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  insert() {
    this.flipcard['username'] = sessionStorage.getItem('username');
    this.flipcard['difficulty'] = 0;
    this.flipcard['shuffle'] = true;
    this.http.post('/api/add-new-flipcard', this.flipcard)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/shuffle']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
