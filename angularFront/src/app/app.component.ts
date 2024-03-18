import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  imports: [ CommonModule]
})
export class AppComponent {
  title = 'school management system';
  show:boolean =  true;

  users:Array<String> = ['aymon','romon']

  onClick() {
    this.show = !this.show
  }
}
