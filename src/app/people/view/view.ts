import { Component, inject } from '@angular/core';
import { StarWarsService } from '../../services/star-wars-service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
  starWarsService = inject(StarWarsService)
  route = inject(ActivatedRoute)

  personId: string | null = null;
  person: Person | null = null;

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id')
    this.starWarsService.getPerson(this.personId).subscribe((data) => {
      this.person = data!;
    })
  }
}
