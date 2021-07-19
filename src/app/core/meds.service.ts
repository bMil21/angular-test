import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Med } from '../models/med';

@Injectable()
export class MedsService {
  private _apiPath = 'api/meds';

  constructor(private http: HttpClient) {}

  getMeds(): Observable<Med[]> {
    return; // replace with GET
  }

  addMed(med: Med): Observable<any> {
    return; // replace with POST
  }
}
