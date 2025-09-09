import { Component, inject } from '@angular/core';
import { StarWarsService } from '../../services/star-wars-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  starWarsService = inject(StarWarsService);
  router = inject(Router);

  personForm: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addPerson() {
    this.starWarsService.addPerson(this.personForm.value).subscribe(() => {
      this.personForm.reset();
      this.router.navigate(['/people']);
    });
    
  }
}
