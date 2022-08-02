import { Component, Input, OnInit } from '@angular/core';
import { AppComponent, catsPhotos } from '../app.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() isLoaded!:AppComponent["load"];
  @Input() arrayOfPhoto!:catsPhotos[];
  constructor() { }

  ngOnInit(): void {
  }

}
