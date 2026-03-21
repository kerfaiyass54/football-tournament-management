import {Component, OnInit} from '@angular/core';
import {TableColumn} from "../../../../components/generic-table/generic-table.component";
import {MANAGER_TABLE_COLUMNS} from "../../../../Shared/constants/manager.constants";
import {ManagerService} from "../../../services/manager.service";
import {CustomListComponent} from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-managers-list',
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './managers-list.component.html',
  styleUrl: './managers-list.component.css',
})
export class ManagersListComponent implements OnInit{

  columns: TableColumn<any>[] = MANAGER_TABLE_COLUMNS;
  data: any[] = [];
  page: number = 1;
  size: number = 5;
  totalElements: number = 0;


  constructor(private managerService: ManagerService) {
  }

  ngOnInit() {
    this.loadManagers();
  }

  loadManagers(){
    this.managerService.getManagers(this.page - 1, this.size).
    subscribe({next: (res: any) => {
      this.data = res.content;          // data for table
      this.totalElements = res.totalElements; // total from backend
    },
      error: (err: any) => console.error(err)
  });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadManagers();
  }


}
