import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My application';
  author: string = 'Cristian Camilo Londoño';
  count: number = 0;
  imgSource: string = './../favicon.ico';
  enabled: boolean = false;
}
