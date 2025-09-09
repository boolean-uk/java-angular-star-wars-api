import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StarWarsService } from '../../services/star-wars-service';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  starWarsService = inject(StarWarsService)

  people$ = new Observable<Person[]>();

  ngOnInit(): void {
    this.people$ = this.starWarsService.getPeople();
    this.people$.subscribe((person) => person);
  }
}
