export * from '@cryptix/wallet/types/rpc';

import {RPC} from '@cryptix/wallet/types/rpc';

export interface SubscriberItem{
  uid:string;
  callback:function;
}

export declare type SubscriberItemMap = Map<string, SubscriberItem[]>;
