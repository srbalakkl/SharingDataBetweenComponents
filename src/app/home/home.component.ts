import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number = 1;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit(): void {
    // this.data.userId.subscribe(userId => this.userId);
  }

  a2mtd() {
    return this.router.navigate(['/atoc']);
  }

  another() {
    return this.router.navigate(['/ac']);
  }
}
