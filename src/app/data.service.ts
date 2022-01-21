import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userId=new BehaviorSubject<number>(0);
  currentUserId=this.userId.asObservable();

  constructor() {
  }

  changeUserId(message:number){
    this.userId.next(message);
  }
}
