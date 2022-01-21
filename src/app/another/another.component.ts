import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  userId:number=2;

  constructor(private data:DataService) {
  }

  ngOnInit(): void {
    this.data.userId.subscribe(userId=>this.userId);
  }

}
