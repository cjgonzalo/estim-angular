export enum PaymentMethod {
  Cash = 'Cash',
  CreditCard = 'Credit Card',
}

export type Purchase = {
  id: number;
  gameId: number;
  userId: number;
  paymentMethod: PaymentMethod;
  pricePaid: string;
}

export type Lend = {
  id: number;
  gameId: number;
  lenderUserId: number;
  borrowerUserId: number;
  expirationDate: Date;
}
