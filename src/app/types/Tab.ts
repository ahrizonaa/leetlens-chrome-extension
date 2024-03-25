import Toggle from '../classes/toggle';
import { Example } from './Example';
import { Format } from './Format';

export type Tab = {
  title: string;
  formats: Format[];
  toggles: Toggle[];
  examples: Example[];
};
