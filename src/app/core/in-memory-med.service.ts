import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryMedService implements InMemoryDbService {
  createDb() {
    let meds = [
      { id: 1, name: 'Advil' },
      { id: 2, name: 'Tylenol' },
      { id: 3, name: 'Motrin' },
      { id: 4, name: 'Benadryl' }
    ];
    return { meds };
  }
}
