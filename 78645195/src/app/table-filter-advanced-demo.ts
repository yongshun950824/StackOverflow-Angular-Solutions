import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Table } from 'primeng/table';
import { Customer, CustomerWithFavoriteHobbies, Representative } from '../domain/customer';
import { CustomerService } from '../service/customerservice';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'table-filter-advanced-demo',
  templateUrl: 'table-filter-advanced-demo.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [CustomerService, FilterService],
})
export class TableFilterAdvancedDemo implements OnInit {
  customers!: CustomerWithFavoriteHobbies[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor(
    private customerService: CustomerService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers.map(x => ({
        ...x,
        favouriteHobbies: x.hobbies?.favourite?.map(y => y.name)
      }));
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(<Date>customer.date))
      );
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];

    this.filterService.register('hobbies-contain', (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.filterFavoriteHobbies(value, filter).length > 0;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  }

  getHobbies(customer: any): string {
    return customer.hobbies?.favourite?.map((h: any) => h.name).join(', ');
  }

  filterFavoriteHobbies(value, filter): any[] {
    let hobbies = value.map((x) => x.name);

    return hobbies.filter((x) => x.includes(filter));
  }
}
