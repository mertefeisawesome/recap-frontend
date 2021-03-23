export interface Rental {
  id: number;
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  brandName: string;
  carName: string;
  customerName: string;
}
