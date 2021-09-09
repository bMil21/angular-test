import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedsService } from '../../core/meds.service';

@Component({
  selector: 'app-add-med',
  templateUrl: './add-med.component.html',
  styleUrls: ['./add-med.component.css']
})
export class AddMedComponent implements OnInit {
  medForm: FormGroup;

  constructor(private medsService: MedsService) {
    this.medForm = new FormGroup({
      medName: new FormControl('')
    });
  }

  ngOnInit(): void {
    //
  }

  submit(): any {
    //
  }
}
