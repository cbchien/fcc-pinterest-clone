import { Component } from '@angular/core';

@Component({
  selector: 'pin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  author = 'cbchien';
  original = 'ksmai';
  link = 'https://github.com/cbchien/fcc-pinterest-clone';
  year = (new Date()).getFullYear();
}