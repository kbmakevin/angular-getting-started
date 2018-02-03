import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  // template: `
  //   <ul class='nav navbar-nav'>
  //     <li><a [routerLink]="['/welcome']">Home</a></li>
  //     <li><a [routerLink]="['/products']">Product List</a></li>
  //   </ul>
  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
