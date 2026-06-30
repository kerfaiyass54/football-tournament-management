import {
  Component,
  OnInit,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { BuilderStadiumService } from '../../Shared/services/builder-stadium/builder-stadium.service';

export interface Stadium {
  id: string;
  name: string;
}

export interface Operation {
  id: string;
  name: string;
  description: string;
  type: string;
  startTime: string;
  endTime: string;
  stadium: Stadium;
}

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css',
})
export class OperationsComponent implements OnInit {

  private stadiumService =
    inject(BuilderStadiumService);

  loading = signal(true);

  remainingOperations =
    signal<Operation[]>([]);

  finishedOperations =
    signal<Operation[]>([]);

  ngOnInit(): void {

    const builderId = Number(
      localStorage.getItem('builderId')
    );

    this.loadOperations(builderId);
  }

  private loadOperations(
    builderId: number
  ): void {

    this.stadiumService
      .getBuilderPendingOperations(builderId)
      .subscribe({
        next: (operations: any) => {

          this.remainingOperations.set(
            operations
          );
        },
        error: err =>
          console.error(err)
      });

    this.stadiumService
      .getBuilderCompletedOperations(builderId)
      .subscribe({
        next: (operations: any) => {

          this.finishedOperations.set(
            operations
          );

          this.loading.set(false);
        },
        error: err => {

          console.error(err);

          this.loading.set(false);
        }
      });
  }

  getRemainingDays(
    operation: Operation
  ): number {

    const end =
      new Date(operation.endTime)
        .getTime();

    const now =
      Date.now();

    return Math.max(
      Math.ceil(
        (end - now)
        /
        (1000 * 60 * 60 * 24)
      ),
      0
    );
  }

  getDurationDays(
    operation: Operation
  ): number {

    const start =
      new Date(operation.startTime)
        .getTime();

    const end =
      new Date(operation.endTime)
        .getTime();

    return Math.ceil(
      (end - start)
      /
      (1000 * 60 * 60 * 24)
    );
  }

  getProgress(
    operation: Operation
  ): number {

    const start =
      new Date(operation.startTime)
        .getTime();

    const end =
      new Date(operation.endTime)
        .getTime();

    const now =
      Date.now();

    if (now >= end) {
      return 100;
    }

    if (now <= start) {
      return 0;
    }

    const total =
      end - start;

    const elapsed =
      now - start;

    return Math.round(
      (elapsed / total) * 100
    );
  }

  formatType(
    type: string
  ): string {

    return type
      .toLowerCase()
      .split('_')
      .map(
        word =>
          word.charAt(0)
            .toUpperCase() +
          word.slice(1)
      )
      .join(' ');
  }
}
