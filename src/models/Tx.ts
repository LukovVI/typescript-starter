export type Tx = {
  hash?: string;
  to?: string;
  from?: string;
  value?: number;
  input?: string;
  maxFeePerGas?: number;
  maxPriotityFeePerGas?: string;
  gasPrice?: number;
};