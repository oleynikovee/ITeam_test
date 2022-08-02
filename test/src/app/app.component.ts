import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Control } from 'src/app/control.service';

export interface Cats{
  id:number,
  name:string,
  temperament:string,
  origin:string
  image:{
    url:string
  }
}

export interface catsPhotos{
  url:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITeam_test';
  private subsBreed!:Subscription;
  private subsLimit!:Subscription;
  breed:string='All';
  limit:string="10";
  load:boolean=false;
  listOfCats:Cats[]=[];
  listOfNames:Cats[]=[];
  listOfPhotos:catsPhotos[]=[];
  constructor(private http:HttpClient,private readonly Control: Control){

  }
  ngOnInit(){
    this.subsBreed = this.Control.breed$.subscribe((breed) =>{
      this.breed=breed
      this.printAllCats(this.breed,this.limit);
    });
    this.subsLimit = this.Control.counter$.subscribe((count) =>{
      this.limit=count 
      this.printAllCats(this.breed,this.limit);
    });
    this.printAllCats(this.breed,this.limit);
  }

  printAllCats(breed:string,limit:string){
    this.listOfCats=[];
    this.listOfNames=[];
    this.load=false;
    this.listOfPhotos=[];
    switch(breed) { 
      case "All": { 
        this.http.get<Cats[]>("https://api.thecatapi.com/v1/breeds?limit="+limit).subscribe(response=>{
          this.listOfCats=response;
          this.listOfNames=response;
          console.log(this.listOfCats);
        })
        break; 
      } 
      default: { 
        this.http.get<Cats[]>("https://api.thecatapi.com/v1/breeds?limit="+limit).subscribe(response=>{
          response.forEach(element => {
            this.listOfCats=[];
            if(element.name===breed){
              this.listOfCats.push(element);
            }
          });
          this.listOfNames=response;
        })
        this.http.get<catsPhotos[]>("https://api.thecatapi.com/v1/images/search?limit="+limit+"&breeds_id="+breed+"&api_key=bd790d52-b437-432e-a369-ede0b4793db2").subscribe(response=>{
          this.listOfPhotos=response;
          this.load=true;
        })
         break; 
      } 
    } 
  }

  ngOnDestroy():void{
    this.subsBreed.unsubscribe();
    this.subsLimit.unsubscribe();
  }
}
