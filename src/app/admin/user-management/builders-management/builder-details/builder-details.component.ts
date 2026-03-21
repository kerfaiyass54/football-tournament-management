import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BuilderService } from '../../../services/builder.service';
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { LoaderComponent } from "../../../../components/loader/loader.component";
import { ModalComponent } from "../../../../components/modal/modal.component";
import { COUNTRIES } from "../../../../Shared/constants/countries";
import {ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-builder-details',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PreviousButtonComponent,
    LoaderComponent,
    FormsModule
  ],
  templateUrl: './builder-details.component.html',
  styleUrl: './builder-details.component.css',

})
export class BuilderDetailsComponent implements OnInit {

  builder: any = null;

  loading = signal(true);
  showDeleteModal = signal(false);
  price: any;
  newPrice: any = 0;

  constructor(
    private route: ActivatedRoute,
    private builderService: BuilderService,
    private router: Router, private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;
    this.builderService.getBuilderById(id).subscribe({
      next: (res) => {
        this.builder = res;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }


  get countryCode(): string {
    if (!this.builder?.nationality) return '';

    const country = COUNTRIES.find(
      c => c.name.toLowerCase() === this.builder.nationality.toLowerCase()
    );

    return country ? country.code.toLowerCase() : '';
  }

  confirmUpdatePrice() {

    if (!this.newPrice || this.newPrice <= 0) {
      alert('Please enter a valid price');
      return;
    }


    this.builderService.updatePrice(this.builder.id, this.newPrice)
      .subscribe({
        next: () => {
          this.builder.price = this.newPrice;
          this.newPrice = 0;
          const modal = document.getElementById('updatePriceModal');
          if (modal) {
            const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
            bsModal?.hide();
          }
          this.toastrService.success("SUCCESS","Price updated");

        },
        error: (err) => {
          this.toastrService.error("ERROR",err);
        }
      });
  }

  confirmDelete() {
    this.builderService.deleteBuilder(this.builder.id)
      .subscribe({
        next: () => {
          const modal = document.getElementById('deleteModal');
          if (modal) {
            const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
            bsModal?.hide();
          }
          this.router.navigate(['/admin/builder-actions'],{ replaceUrl: true });
          this.toastrService.success("DELETED","Builder is deleted");
        },
        error: (err) => {
          this.toastrService.error("ERROR",err);
        }
      });
  }

}
