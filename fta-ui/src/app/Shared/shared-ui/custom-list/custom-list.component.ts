import { Component, ChangeDetectionStrategy, Input, signal, computed, OnChanges, SimpleChanges } from '@angular/core';
import { GenericTableComponent, TableColumn } from "../../../components/generic-table/generic-table.component";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericTableComponent],
  templateUrl: './custom-list.component.html',
  styleUrl: './custom-list.component.css',
})
export class CustomListComponent implements OnChanges {

  @Input() cols: TableColumn<any>[] = [];
  @Input() infos: any[] = [];
  @Input() title: string = 'List';

  // ✅ NEW INPUTS
  @Input() page: number = 1;
  @Input() size: number = 5;
  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  data = signal<any[]>([]);
  columns: TableColumn<any>[] = [];

  total = computed(() => this.data().length);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['infos']) {
      this.data.set(this.infos);
    }

    if (changes['cols']) {
      this.columns = this.cols;
    }
  }


}
