import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CustomListComponent } from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import { TableColumn } from "../../../../components/generic-table/generic-table.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { BUILDER_TABLE_COLUMNS } from "../../../../Shared/constants/builder.constants";
import {BuilderService} from "../../../services/builder.service";

@Component({
  selector: 'app-builders-list',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './builders-list.component.html',
  styleUrl: './builders-list.component.css',
})
export class BuildersListComponent implements OnInit {

  columns: TableColumn<any>[] = BUILDER_TABLE_COLUMNS;
  data: any[] = [];

  page: number = 1;  // UI page (starts at 1)
  size: number = 5;

  totalElements: number = 0;

  constructor(private builderService: BuilderService) {}

  ngOnInit(): void {
    this.loadBuilders();
  }

  loadBuilders() {
    this.builderService.getAll(this.page - 1, this.size).subscribe({
      next: (res: any) => {
        this.data = res.content;          // data for table
        this.totalElements = res.totalElements; // total from backend
      },
      error: (err: any) => console.error(err)
    });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadBuilders();
  }
}
