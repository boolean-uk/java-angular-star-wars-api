import { inject, Injectable } from '@angular/core';
import { Person } from '../people/models/person';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  http = inject(HttpClient);

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/people`);
  }

  getPerson(id: string | null): Observable<Person | undefined> {
    return this.http.get<Person>(`${environment.apiUrl}/people/${id}`);
  }

  addPerson(person: Person) {
    return this.http.post(`${environment.apiUrl}/people`, person);
  }
}
