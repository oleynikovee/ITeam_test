import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Control {
    public breed$=new Subject<string>();
    public counter$=new Subject<string>();

    //changeBreed->service,that get and change state of breed
	public changeBreed(breed:string) {
        this.breed$.next(breed); 
    }
    //changeBreed->service,that get and change state of counter
	public changeCounter(count:string) {
        this.counter$.next(count); 
    }
}