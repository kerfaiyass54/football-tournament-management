import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COUNTRIES } from '../../../../Shared/constants/countries';
import { PreviousButtonComponent } from '../../../../components/buttons/previous-button/previous-button.component';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-players-adding',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PreviousButtonComponent],
  templateUrl: './players-adding.component.html',
  styleUrl: './players-adding.component.css',
})
export class PlayersAddingComponent {

  constructor(private playerService: PlayerService) {}

  /* =========================
     🟣 STEPPER
  ========================== */

  activeStep = signal<number>(0);

  steps: string[] = [
    'Basic Info',
    'Career Info',
    'Review'
  ];

  /* =========================
     🟢 FORM SIGNALS
  ========================== */

  name = signal<string>('');
  nationality = signal<string>('');
  yearOfBirth = signal<number>(2000);
  position = signal<string>('ST');
  status = signal<string>('NEW');
  price = signal<number>(0);

  nationalities = COUNTRIES;

  positions: string[] = [
    'GK','RB','LB','CB','SW',
    'CM','CDM','CAM','LMF','RMF',
    'ST','CF','SS','LWF','RWF'
  ];

  statuses: string[] = [
    'PLAYING','BANNED','PUNISHED','NEW','FREE_AGENT'
  ];

  /* =========================
     ✅ VALIDATIONS
  ========================== */

  isStep1Valid = computed(() =>
    this.name().trim().length > 2 &&
    this.nationality().trim().length > 0 &&
    this.yearOfBirth() >= 1950
  );

  isStep2Valid = computed(() =>
    this.position().length > 0 &&
    this.status().length > 0 &&
    this.price() > 0
  );

  isFormValid = computed(() =>
    this.isStep1Valid() &&
    this.isStep2Valid()
  );

  /* =========================
     🔄 NAVIGATION
  ========================== */

  next() {
    if (this.activeStep() < this.steps.length - 1) {
      this.activeStep.update(v => v + 1);
    }
  }

  prev() {
    if (this.activeStep() > 0) {
      this.activeStep.update(v => v - 1);
    }
  }

  /* =========================
     🚀 SUBMIT
  ========================== */

  submit() {
    if (!this.isFormValid()) return;

    const player = {
      name: this.name(),
      nationality: this.nationality(),
      yearOfBirth: this.yearOfBirth(),
      position: this.position(),
      status: this.status(),
      price: this.price()
    };

    this.playerService.createPlayer(player).subscribe(() => {
      this.activeStep.set(0);
    });
  }
}
