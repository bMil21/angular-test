import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Med } from '../models/med';

@Injectable()
export class MedsService {
  private _apiPath = 'api/meds';

  constructor(private http: HttpClient) {}

  getMeds(): Observable<Med[]> {
    return this.http.get<Med[]>(this._apiPath).pipe(map(meds => meds));
  }

  addMed(med: Med): Observable<any> {
    return; // replace with POST
  }
}
