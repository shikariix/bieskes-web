import { Component } from '@angular/core';
import * as data from '../../data/bieskes.json';

@Component({
  selector: 'page-bieske-overview',
  templateUrl: './bieske-overview.component.html',
  styleUrls: ['./bieske-overview.component.scss']
})
export class BieskeOverviewComponent {

  constructor() {
    console.log(data);
  }
}
