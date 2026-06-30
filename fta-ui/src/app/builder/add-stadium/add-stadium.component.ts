import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type StadiumType =
  | 'OLYMPIC'
  | 'FOOTBALL_ONLY'
  | 'MODERN_ARENA'
  | 'BOWL'
  | 'MULTI_PURPOSE';

@Component({
  selector: 'app-add-stadium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-stadium.component.html',
  styleUrl: './add-stadium.component.css'
})
export class AddStadiumComponent {

  private router = inject(Router);

  step = signal(1);

  name = signal('');
  country = signal('');

  capacity = signal<number | null>(null);

  yearOfEstablishment = signal<number | null>(null);

  type = signal<StadiumType | null>(null);

  readonly stadiumTypes = [
    {
      value: 'FOOTBALL_ONLY',
      title: 'Football Only',
      icon: '⚽'
    },
    {
      value: 'OLYMPIC',
      title: 'Olympic',
      icon: '🏃'
    },
    {
      value: 'MODERN_ARENA',
      title: 'Modern Arena',
      icon: '🏟️'
    },
    {
      value: 'BOWL',
      title: 'Bowl',
      icon: '🏆'
    },
    {
      value: 'MULTI_PURPOSE',
      title: 'Multi Purpose',
      icon: '🎭'
    }
  ];

  canStep2 = computed(() =>
    this.name().trim().length >= 3 &&
    this.country().trim().length >= 2
  );

  canStep3 = computed(() =>
    this.capacity() !== null &&
    this.capacity()! >= 500 &&
    this.yearOfEstablishment() !== null
  );

  isValid = computed(() =>
    this.canStep2() &&
    this.canStep3() &&
    this.type() !== null
  );

  next() {
    this.step.update(v => Math.min(v + 1, 3));
  }

  previous() {
    this.step.update(v => Math.max(v - 1, 1));
  }

  submit() {

    const payload = {
      name: this.name(),
      country: this.country(),
      capacity: this.capacity(),
      yearOfEstablishment: this.yearOfEstablishment(),
      type: this.type(),
      builderId: 1
    };

    console.log(payload);

    // service call here
  }
}
