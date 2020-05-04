import { Component } from '@angular/core';
import { AlertifyService } from './_services/alertify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stamer - Kalkulator';

  constructor(private alertify: AlertifyService) {

  }

  ngOnInit() {

  }
}
