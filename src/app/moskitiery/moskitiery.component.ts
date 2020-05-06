import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moskitiery',
  templateUrl: './moskitiery.component.html',
  styleUrls: ['./moskitiery.component.css']
})
export class MoskitieryComponent implements OnInit {
  sum = 0;

  constructor() { }

  ngOnInit() {
  }

  sendResult(result: number) {
    this.sum += result;
  }
}
