import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  user = {};
  session = false;
  signupDialogRef: MatDialogRef<SignupDialogComponent>;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    if( sessionStorage.getItem('flipcard_session') ) {
      this.session = true;
    }
  }

  openSignupDialog() {
    this.signupDialogRef = this.dialog.open(SignupDialogComponent);
  }

  login() {
    this.http.post('/api/login', this.user)
    .subscribe(res => {
        let value = JSON.stringify(res);
        sessionStorage.setItem("flipcard_session", value);
        if( sessionStorage.getItem('flipcard_session') ) {
          this.session = true;
          sessionStorage.setItem("username", this.user['username']);
          this.router.navigate(['/shuffle']);
          //location.reload();
        }
      }, (err) => {
        console.log(err);
      }
    );
  }
}
