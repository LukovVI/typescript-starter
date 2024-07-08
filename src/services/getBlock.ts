import { Block } from '../models/Block.js';

export async function getBlockByNumber(num: string): Promise<Block> {
  const body = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: [`0x${parseInt(num).toString(16)}`, true],
    id: 0,
  });
  const url = 'https://ethereum.publicnode.com/';
  const response = await fetch(url, {
    body,
    method: 'POST',
  });

  const res = await response.json();
  const resres = res.result;
  const block: Block = {
    height: parseInt(resres.number),
    hash: resres.hash,
    parentHesh: resres.parentHash,
    gasLimit: parseInt(resres.gasLimit),
    gasUsed: parseInt(resres.gasUsed),
    size: parseInt(resres.size),
  };
  return block;
}
