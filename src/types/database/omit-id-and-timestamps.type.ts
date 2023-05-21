import { OmitTimestamps } from './omit-timestamps.type';
import { ITimestamps } from './timestamps.interface';

export type OmitIdAndTimestamps<T extends ITimestamps> = Omit<
  OmitTimestamps<T>,
  'id'
>;
