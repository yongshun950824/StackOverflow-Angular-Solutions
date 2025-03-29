export interface IUserList {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IMerchant {
  id: string;
  merchantName: string;
  accountNumber: string;
  userLists: IUserList[];
}

export interface IPageItem {
  id: string;
  merchantId: string;
  userId: string;
  merchant: IMerchant;
}

export interface IData {
  pageItems: IPageItem[];
}

export interface IMerchantUserList {
  data: IData;
  successful: boolean;
  message: string;
  statusCode: number;
}
