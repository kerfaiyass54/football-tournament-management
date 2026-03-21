import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousButtonComponent } from '../../../../components/buttons/previous-button/previous-button.component';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-teams-adding',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PreviousButtonComponent],
  templateUrl: './teams-adding.component.html',
  styleUrl: './teams-adding.component.css',
})
export class TeamsAddingComponent {

  constructor(private teamService: TeamService) {}

  /* =========================
     🟣 STEPPER
  ========================== */

  activeStep = signal<number>(0);

  steps: string[] = [
    'Basic Info',
    'Team Details',
    'Review'
  ];

  /* =========================
     🟢 FORM SIGNALS
  ========================== */

  name = signal<string>('');
  establishYear = signal<number>(2000);
  city = signal<string>('');
  rank = signal<number>(1);
  status = signal<string>('CAN_PLAY');
  budget = signal<number>(25);

  statuses: string[] = ['BANNED', 'CAN_PLAY', 'CLOSED'];

  /* =========================
     ✅ VALIDATIONS
  ========================== */

  isStep1Valid = computed(() =>
    this.name().trim().length > 2 &&
    this.city().trim().length > 1 &&
    this.establishYear() >= 1890
  );

  isStep2Valid = computed(() =>
    this.rank() > 0 &&
    this.budget() >= 25 &&
    this.status().length > 0
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

    const team = {
      name: this.name(),
      establishYear: this.establishYear(),
      city: this.city(),
      rank: this.rank(),
      status: this.status(),
      budget: this.budget()
    };

    this.teamService.createTeam(team).subscribe(() => {
      this.activeStep.set(0);

      // Optional reset
      this.name.set('');
      this.city.set('');
      this.establishYear.set(2000);
      this.rank.set(1);
      this.status.set('CAN_PLAY');
      this.budget.set(25);
    });
  }
}
