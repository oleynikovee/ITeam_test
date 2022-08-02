import { Component, Input, OnInit } from '@angular/core';
import { Cats } from '../app.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  @Input() cats!: Cats[];
  constructor() { }
  ngOnInit(): void {
  }

}
