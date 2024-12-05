import { Component, OnInit } from '@angular/core';
import { MyClass } from '../models/my-class';
import { CommonModule } from '@angular/common'; // Important for standalone components

@Component({
  selector: 'app-myclass',
  standalone: true, // Add this
  imports: [CommonModule], // Add this for common directives
  templateUrl: './myclass.component.html',
})
export class MyClassDemoComponent implements OnInit {
  output: string = '';

  ngOnInit() {
    this.processQueries();
  }

  processQueries() {
    const queries: number[][] = [
      [1, 5],   // Increment by 5
      [1, 6],   // Increment by 6
      [2]       // Get current value
    ];

    const myClass = new MyClass();
    const results: number[] = [];

    for (const query of queries) {
      if (query[0] === 1) {
        // Type 1 query: add value
        myClass.add(query[1]);
      } else if (query[0] === 2) {
        // Type 2 query: get current value
        results.push(myClass.getX());
      }
    }

    // Display results
    this.output = results.join('\n');
  }
}