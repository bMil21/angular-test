import { Component, OnInit } from '@angular/core';
import { MedsService } from '../../core/meds.service';
import { Med } from '../../models/med';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {
  public meds: Med[];

  constructor(private medsService: MedsService) {}

  ngOnInit() {
    this.getMeds();
  }

  getMeds(): void {
    this.medsService.getMeds().subscribe(meds => {
      console.log('meds', meds);
      this.meds = meds;
    });
  }
}
