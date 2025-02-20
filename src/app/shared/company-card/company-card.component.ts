import { Component, Input } from '@angular/core';
import { Company } from '../../admin/features/companies/company.model';
import { AuthService } from '../../user/auth.service';
import { CompanyService } from '../../admin/features/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyDeletePopupComponent } from 'src/app/admin/features/companies/company-delete-popup/company-delete-popup.component';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css'],
})
export class CompanyCardComponent {
  @Input() company: Company;

  constructor(
    public authService: AuthService,
    private companyService: CompanyService,
    private dialogDeleteRef: MatDialog,
    private router: Router
  ) {}

  parseUrl(url: string) {
    return encodeURIComponent(url);
  }

  canEditCompany(company: Company) {
    return this.authService.canAccessAdminDashboard;
  }

  openCompanyDeleteDialog(company: Company): void {
    this.dialogDeleteRef.open(CompanyDeletePopupComponent, {
      panelClass: 'delete-article-popup-panel',
      data: { company: company },
    });
  }
}
