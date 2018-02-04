import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatIconModule, MatMenuModule } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Flipcard';

  constructor(private location: Location) { }

  ngOnInit() {
  }



  // this.router.navigate(['/shuffle']);
  
  signout() {
    sessionStorage.clear();
    location.reload();
  }
}
