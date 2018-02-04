import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {

  user = {};

  constructor(
    private dialogRef: MatDialogRef<SignupDialogComponent>,
    private http: HttpClient, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  createUser() {
    this.http.post('/api/signup-here', this.user)
    .subscribe(res => { 
      this.router.navigate(['/']); 
    }, (err) => {
      console.log(err);
    }
  );
    this.dialogRef.close();
  }
}
