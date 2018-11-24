import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASEURL} from '../../config/webservice';
@Injectable({
  providedIn: 'root'
})
export class OrdiserviceService {

  constructor(private http: HttpClient) {
  }

  create(ordinateur: Ordinateur): Observable<Object> {
    return this.http.post(BASEURL + '/Materiaux', ordinateur);
  }

  getEquip(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(BASEURL + '/Materiaux');

  }
}
