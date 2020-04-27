import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'router-outlet',
  templateUrl: './cat_list.component.html',
  styleUrls: ['./app.component.css']
})
export class CatListComponent {
  title = 'description';
  constructor(
    private router: Router,
  ) {}

  gotoDesc() {
    this.router.navigate(['/description']);
  }
}
