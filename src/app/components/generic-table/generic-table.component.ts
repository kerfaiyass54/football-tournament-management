import {
  Component,
  computed,
  input,
  output,
  signal, effect, ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type ColumnType = 'text' | 'badge' | 'icon' | 'number' | 'enum' | 'currency' | 'date';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  type?: ColumnType;

  formatter?: (value: any, row: T) => string;

  badgeConfig?: {
    classMap: Record<string, string>;
  };

  iconConfig?: {
    classMap: Record<string, string>;
  };
}


@Component({
  selector: 'app-generic-table',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T extends { id: any }> {

  // ---------- INPUTS ----------
  data = input.required<T[]>();
  columns = input.required<TableColumn<T>[]>();
  enableCheckbox = input<boolean>(false);
  pageSizeOptions = input<number[]>([5, 10]);
  selectionMode = input<'single' | 'multiple'>('multiple');
  page = input<number>(1);
  size = input<number | null>(null);


  // ---------- OUTPUTS ----------
  selectedChange = output<T[]>();
  pageChange = output<number>();


  // ---------- INTERNAL STATE ----------
  globalSearch = signal('');
  selectedIds = signal<number[]>([]);
  currentPage = signal(this.page());
  pageSize = signal(this.size() ?? this.pageSizeOptions()[0]);
  sortColumn = signal<keyof T | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');

  constructor() {
    effect(() => {
      this.currentPage.set(this.page());
    });

    effect(() => {
      if (this.size() !== null) {
        this.pageSize.set(this.size()!);
      }
    });
  }

  // ---------- COMPUTED ----------
  filteredData = computed(() => {
    let d = this.data();

    if (this.globalSearch()) {
      const term = this.globalSearch().toLowerCase();
      d = d.filter(row =>
        Object.values(row).some(val =>
          val?.toString().toLowerCase().includes(term)
        )
      );
    }

    if (this.sortColumn()) {
      const col = this.sortColumn()!;
      const dir = this.sortDirection() === 'asc' ? 1 : -1;

      d = [...d].sort((a, b) => {
        if (a[col]! > b[col]!) return dir;
        if (a[col]! < b[col]!) return -dir;
        return 0;
      });
    }

    return d;
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredData().length / this.pageSize())
  );

  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.filteredData().slice(start, start + this.pageSize());
  });

  pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  // ---------- METHODS ----------
  sort(column: keyof T) {
    if (this.sortColumn() === column) {
      this.sortDirection.set(
        this.sortDirection() === 'asc' ? 'desc' : 'asc'
      );
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }

  changePage(p: number) {
    if (p >= 1 && p <= this.totalPages()) {
      this.currentPage.set(p);
      this.pageChange.emit(p);
    }
  }

  setPageSize(size: number) {
    this.pageSize.set(size);
    this.currentPage.set(1);
  }

  toggleRow(id: number) {

    if (this.selectionMode() === 'single') {

      if (this.selectedIds().includes(id)) {
        this.selectedIds.set([]);
      } else {
        this.selectedIds.set([id]);
      }

    } else {

      this.selectedIds.update(ids =>
        ids.includes(id)
          ? ids.filter(x => x !== id)
          : [...ids, id]
      );

    }

    this.emitSelection();
  }


  toggleAll() {

    if (this.selectionMode() === 'single') {
      return; // Do nothing in single mode
    }

    const pageIds = this.paginatedData().map(r => r.id);
    const allSelected = pageIds.every(id =>
      this.selectedIds().includes(id)
    );

    this.selectedIds.update(ids =>
      allSelected
        ? ids.filter(id => !pageIds.includes(id))
        : [...new Set([...ids, ...pageIds])]
    );

    this.emitSelection();
  }


  emitSelection() {
    const selected = this.data().filter(d =>
      this.selectedIds().includes(d.id)
    );
    this.selectedChange.emit(selected);
  }

  isSelected(id: number) {
    return this.selectedIds().includes(id);
  }
}
