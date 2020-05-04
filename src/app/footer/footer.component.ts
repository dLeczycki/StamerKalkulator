import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  goToFacebook(): void {
    window.location.href = 'https://www.facebook.com/Stamer-534367093419801/';
  }

  goToInstagram(): void {
    window.location.href = 'https://www.instagram.com/stamer_rolety/?hl=pl';
  }

}
