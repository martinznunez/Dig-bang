export enum FieldType {
  Amount = "amount",
  Term = "term",
}

export interface RangeData {
  min: number;
  max: number;
}

export interface Installment {
  term: string;
  amount: string;
  credit: string;
}
