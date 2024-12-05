import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyClassDemoComponent } from './myclass/myclass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyClassDemoComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myClass';
}