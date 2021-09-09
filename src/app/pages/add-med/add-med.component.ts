import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedsService } from '../../core/meds.service';
import { Med } from '../../models/med';

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
    const medName = this.medForm.get('medName').value;

    if (this.medForm.get('medName').value) {
      const med: Med = {
        name: medName
      };
      this.medsService.addMed(med).subscribe(
        () => {
          this.medForm.reset();
        },
        error => {
          alert('Error: ' + error);
        }
      );
    } else {
      alert('enter a value');
    }
  }
}
