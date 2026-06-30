import {
  Component,
  OnInit,
  inject,
  signal,
  DestroyRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { takeUntilDestroyed }
  from '@angular/core/rxjs-interop';

import { BuilderStadiumService }
  from '../../Shared/services/builder-stadium/builder-stadium.service';
import {RouterLink} from "@angular/router";

export interface Stadium {
  id: string;
  name: string;
  country: string;
  capacity: number;
  type: string;
  yearOfEstablishment: number;
}

@Component({
  selector: 'app-my-stadiums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-stadiums.component.html',
  styleUrl: './my-stadiums.component.css'
})
export class MyStadiumsComponent implements OnInit {

  private stadiumService =
    inject(BuilderStadiumService);

  private destroyRef =
    inject(DestroyRef);

  loading = signal(true);

  stadiums = signal<any[]>([]);

  ngOnInit(): void {
    this.loadStadiums();
  }

  private loadStadiums(): void {

    const builderId = 1;

    this.stadiumService
      .getBuilderStadiums(builderId)
      .pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      )
      .subscribe({
        next: (stadiums:any) => {

          this.stadiums.set(stadiums);

          this.loading.set(false);
        },

        error: err => {

          console.error(err);

          this.loading.set(false);
        }
      });
  }
}
