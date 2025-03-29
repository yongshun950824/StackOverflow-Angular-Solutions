import { Component, VERSION } from '@angular/core';
import { IPageItem } from './models/merchant-user-list.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allMerchantUserList: any[] = DATA.data.pageItems;
  dataBk: IPageItem[] = this.allMerchantUserList;
  selectedName: string;

  // constructor(
  //   private merchantService: MerchantUserService
  // ) {
  // }

  onMerchantUserSearch() {
    console.log(1);
    this.allMerchantUserList = this.dataBk.filter((row) =>
      row.merchant.userLists.find(
        (x) =>
          x.firstName
            ?.toLowerCase()
            .includes(this.selectedName?.toLowerCase()) &&
          x.lastName
            ?.toLowerCase()
            .includes(this.selectedName?.toLowerCase()) &&
          x.email?.toLowerCase().includes(this.selectedName?.toLowerCase())
      )
    );
  }
}

export const DATA = {
  data: {
    pageItems: [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        merchantId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        userId: 'string',
        merchant: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          merchantName: 'string',
          accountNumber: 'string',
          userLists: [
            {
              id: 'string',
              firstName: 'string',
              lastName: 'string',
              email: 'string',
            },
          ],
        },
      },
    ],
  },
  successful: true,
  message: 'string',
  statusCode: 0,
};
