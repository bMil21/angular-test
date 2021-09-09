import { Component, OnInit } from '@angular/core';
import { Med } from '../../models/med';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {
  public meds: Med[];

  constructor() {}

  ngOnInit() {}

  getMeds(): void {
    //
  }
}
