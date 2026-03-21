import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-previous-button',
  imports: [],
  templateUrl: './previous-button.component.html',
  styleUrl: './previous-button.component.css',
})
export class PreviousButtonComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
