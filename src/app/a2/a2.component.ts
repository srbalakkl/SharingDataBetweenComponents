import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  userId:number=3;

  constructor(private data:DataService) {
  }

  ngOnInit(): void {
    this.data.userId.subscribe(userId=>this.userId);
  }

}
