import { Tx } from '../models/Tx.js';

export async function getTransactionByHash(str: string): Promise<Tx> {
  const body = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_getTransactionByHash',
    params: [str],
    id: 0,
  });
  const url = 'https://ethereum.publicnode.com/';
  const response = await fetch(url, {
    body,
    method: 'POST',
  });

  const res = await response.json();
  const resres = res.result;
  const tr: Tx = {
    hash: resres.hash,
    to: resres.to,
    from: resres.from,
    value: parseInt(resres.value, 16),
    input: resres.input,
    maxFeePerGas: parseInt(resres.maxFeePerGas, 16),
    maxPriotityFeePerGas: resres.maxPriorityFeePerGas,
    gasPrice: parseInt(resres.gasPrice, 16),
  };

  return tr;
}
