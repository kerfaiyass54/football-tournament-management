import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuilderService } from "../../../services/builder.service";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { ActionsUiComponent } from "../../../../Shared/shared-ui/actions-ui/actions-ui.component";
import { TableColumn } from "../../../../components/generic-table/generic-table.component";

@Component({
  selector: 'app-builders-actions',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PreviousButtonComponent,
    ActionsUiComponent
  ],
  templateUrl: './builders-actions.component.html',
  styleUrl: './builders-actions.component.css',
})
export class BuildersActionsComponent implements OnInit {

  builders: any[] = [];

  columns: TableColumn<any>[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'nationality', label: 'Nationality', sortable: true },
    { key: 'expertise', label: 'Expertise', sortable: true },
    { key: 'yearEstablished', label: 'Established', sortable: true },
    { key: 'price', label: 'Price', sortable: true }
  ];

  constructor(
    private builderService: BuilderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBuilders();
  }

  loadBuilders() {
    this.builderService.getAll(0, 20).subscribe(res => {
      this.builders = res.content;

    });
  }

  goToDetails(builder: any) {
    this.router.navigate(['/builders', builder.id]);
  }
}
